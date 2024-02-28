;['copy', 'cut', 'paste'].forEach(name => {
  const h = e => {
    e.stopImmediatePropagation()
    return true
  }
  document.addEventListener(name, h, true)
})
