/**
 * Object uses as wrapper for window.
 */
let Window = {
  isFake: true,
  addEventListener: function () {},
  removeEventListener: function () {}
}

if (typeof window !== 'undefined') {
  Window = window
}

export default Window
