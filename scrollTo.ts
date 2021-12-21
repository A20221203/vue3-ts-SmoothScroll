import { DirectiveBinding } from 'vue'

export default {
  mounted: (el: Element, binding: DirectiveBinding): void => {
    const toEl = document.getElementById(binding.value)
    if (toEl === null) return
    el.addEventListener('click', function (e) {
      if (window.scrollTo) {
        e.preventDefault()
        window.scrollTo({
          behavior: 'smooth',
          top: toEl.offsetTop
        })
      }
    })
  }
}
