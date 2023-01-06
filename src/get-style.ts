/**
 * --------------------------------------------------------------------------
 * CoreUI (__COREUI_VERSION__): get-style.ts
 * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const getStyle = (property: string, element = document.body) => {
  return window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
}

export default getStyle
