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
    function findTextNode(node) {
        // If the node is a Text node do some manipulation
        if(node.constructor == Text) {
            let content = node.textContent.trim()
            if (content) {
                console.log("HERE")
                console.log(content)
                window.dog = node
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
    debugger
    for (childNode of body.childNodes) {
        findTextNode(childNode)
    }

}

