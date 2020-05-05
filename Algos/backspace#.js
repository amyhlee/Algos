// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

function backspace(str1, str2) {
  let firstString = trim(str1)
  let secondString = trim(str2)

  if (firstString.length !== secondString.length) return false

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) return false
  }
  return true
}

function trim(str) {
  str = str.split('')

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      str.splice(i - 1, 2)
    }
  }
  return str.join('')
}
