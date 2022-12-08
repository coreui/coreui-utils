const pickByKeys = (originalObject: object, keys: string | string[]) => {
  const newObj = {}
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]]
  }
  return newObj
}

export default pickByKeys
