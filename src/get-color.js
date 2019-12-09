import getStyle from './get-style'

const getColor = (rawProperty, element = document.body) => {
  const property = `--${rawProperty}`
  const style = getStyle(property, element)
  return style ? style : rawProperty
}

export default getColor
