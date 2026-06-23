export default (callback) => (node) => {
  const onclick = (event) => {
    if (
      node &&
      !node.contains(event.target) &&
      !event.defaultPrevented &&
      typeof callback === 'function'
    ) {
      callback()
    }
  }

  document.addEventListener('click', onclick, true)

  return () => {
    document.removeEventListener('click', onclick, true)
  }
}
