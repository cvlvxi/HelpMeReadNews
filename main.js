// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: doStuff,
  });
});

/**
 * Todo:
 * 1. Why can't I reference functions defined in the file from other functions
 * 2. Filter out certain tags 
 */

function doStuff() {
    let tagsToIgnore = 

    function findTextNode(node, blackListedTags) {
        // If the node is a Text node do some manipulation
        if(node.constructor == Text) {
            console.log("I am a text node")
            console.log(node)
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

