/**
 * --------------------------------------------------------------------------
 * CoreUI Utils (__COREUI_VERSION__): getStyle.ts
 * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const getStyle = (property: string, element = document.body) => {
  return window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
}

export default getStyle
