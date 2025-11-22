const browserAPI = typeof browser !== 'undefined' ? browser : chrome

function inside() {
  const h = e => {
    e.stopImmediatePropagation()
    return true
  }
  ;['copy', 'cut', 'paste'].forEach(name => {
    document.addEventListener(name, h, true)
  })
}

browserAPI.action.onClicked.addListener(tab => {
  browserAPI.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: inside,
  })
})
