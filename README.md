# HELP ME READ NEWS

<!-- vscode-markdown-toc -->
* [Perspective API](#PerspectiveAPI)
* [Chrome Extension v3](#ChromeExtensionv3)
* [Installing](#Installing)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Chrome Extension helper for reading news bias. 

## <a name='PerspectiveAPI'></a>Perspective API
- This uses the perspective api to get a score for sentences which will overlay a gradient of:
    * 100-75 toxic (red)
    * 75-50 toxic (red-yellow)
    * 25-50 toxic (green-yellow)
    * 0-25 toxic (green)

- See perspective API here: [link](https://www.perspectiveapi.com/)

## <a name='ChromeExtensionv3'></a>Chrome Extension v3
- This uses manifestv3 and not v2. 
- See how this works here: [link](https://developer.chrome.com/docs/extensions/mv3/intro/)

## <a name='Installing'></a>Installing
- Go here [link](chrome://extensions)
- Click "load unpacked" and select the github repo 
- Click the puzzle piece to bookmark the HelpMeReadNews extension 
- Click the button to toggle the overlay