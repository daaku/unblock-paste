browser.browserAction.onClicked.addListener(tab => {
  browser.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ['content.js'],
  })
})
