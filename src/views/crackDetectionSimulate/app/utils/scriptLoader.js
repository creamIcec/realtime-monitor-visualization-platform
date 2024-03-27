async function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script')
    scriptEl.type = 'text/javascript'
    scriptEl.src = src + '&callback=onLoaded'
    document.head.appendChild(scriptEl)
    scriptEl.onerror = reject
    resolve(scriptEl)
  })
}

export default{
  loadExternalScript
}