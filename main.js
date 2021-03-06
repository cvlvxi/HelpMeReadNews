// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: highlightText,
  });
});

/**
 * Todo:
 * 1. Why can't I reference functions defined in the file from other functions
 * 2. Filter out certain tags 
 */

function highlightText() {
    function checkTaggedString(string) {
        return string[0] == '<' && string[string.length -1] == '>'
    }

    function wrapSpanColor(node, toxicPercentage) {
        // FIXME: You really want to lerp by the toxic Perc
        let someBleh = 10.0;
        let r = someBleh * toxicPercentage * 255;
        let g = someBleh * (1 - toxicPercentage) * 255;
        let b = 0 * 255;

        console.log(r, g, b)

        let newNode = document.createElement("span")
        newNode.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);
        let parent = node.parentNode;
        parent.insertBefore(newNode, node);
        newNode.appendChild(node);
    }

    function findTextNode(node, notAllowedTags=["PRE", "CODE"]) {
        // Skip the following node if notAllowedTag
        if(notAllowedTags.some(tag => tag.toUpperCase() == node.nodeName.toUpperCase())) {
            return;
        }

        // If the node is a Text node do some manipulation
        if(node.constructor == Text) {
            let content = node.textContent.trim()
            if (content && !checkTaggedString(content)) {
                // Do stuff
                wrapSpanColor(node, Math.random())
            }
        }
        // Get the child nodes
        let cn = node.childNodes
        for(let childNode of cn) {
            findTextNode(childNode)
        }
    }
    let body = document.body;

    // Given a node
    for (childNode of body.childNodes) {
        findTextNode(childNode)
    }

}

