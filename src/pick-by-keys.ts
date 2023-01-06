/**
 * --------------------------------------------------------------------------
 * CoreUI (__COREUI_VERSION__): pick-by-keys.ts
 * Licensed under MIT (https://github.com/coreui/coreui-utils/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const pickByKeys = (originalObject: object, keys: string | string[]) => {
  const newObj = {}
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]]
  }
  return newObj
}

export default pickByKeys
