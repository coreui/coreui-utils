import getCssCustomProperties from './get-css-custom-properties'

const minIEVersion = 11
const isIE1x = () => Boolean(document.DOCUMENT_NODE) && document.DOCUMENT_NODE >= minIEVersion
const isCustomProperty = (property: string) => property.match(/^--.*/i)

const getStyle = (property: string, element = document.body) => {
  let style

  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = getCssCustomProperties()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }

  return style
}

export default getStyle
