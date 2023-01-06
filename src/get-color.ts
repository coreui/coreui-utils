/**
 * --------------------------------------------------------------------------
 * CoreUI (__COREUI_VERSION__): get-color.ts
 * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import getStyle from './get-style'

const getColor = (rawProperty: string, element = document.body) => {
  const property = `--${rawProperty}`
  const style = getStyle(property, element)
  return style ? style : rawProperty
}

export default getColor
