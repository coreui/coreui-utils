/* eslint-disable no-magic-numbers */
const hexToRgb = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    // Convert 3-digit hex (eg #abc) to 6-digit (#aabbcc) for valid rgb code
    r = parseInt(color.slice(1, 2).repeat(2), 16)
    g = parseInt(color.slice(2, 3).repeat(2), 16)
    b = parseInt(color.slice(3, 4).repeat(2), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

export default hexToRgb
