// return a string describing the first character of the given string.

function firstChar(str) {
  let char = str[0]

  if (char === char.toUpperCase() && !Number.isInteger(Number(char))) {
    return 'upper'
  }else if (char === char.toLowerCase() && !Number.isInteger(Number(char))) {
    return 'lower'
  }else if (char >= '0' && char char <= '9') {
    return 'digit'
  }else{
    return 'other'
  }
}
