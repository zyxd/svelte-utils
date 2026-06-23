export default (callback) => (node) => {
  $effect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries?.[0].isIntersecting) {
        callback()
      }
    })

    observer.observe(node)
    return () => observer.disconnect()
  })
}
