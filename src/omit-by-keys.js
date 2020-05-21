const omitByKeys = (originalObject, keys) => {
  var newObj = {}
  var objKeys = Object.keys(originalObject)
  for (var i = 0; i < objKeys.length; i++) {
    !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]])
  }
  return newObj
}

export default omitByKeys