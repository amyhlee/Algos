// reverse a given string
//reverseString('yoyo mastery')  should return: 'yretsam oyoy'

function reverseString(str) {
  let reversedString = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

function reverseStringRecursive(str) {
  if (str === "") {
    return ""
  }
  return reverseStringRecursive(str.substring(1)) + str.charAt(0)
}
