export function clickOutside(node) {
  function handleClick(event)
  {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click-outside')
      )
    }
  }
}