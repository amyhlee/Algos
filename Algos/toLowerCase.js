// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

function toLowerCase(str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    let num = str.charCodeAt(i)

    if (num >= 65 && num <= 90) {
      num += 32
    }
    result += String.fromCharCode(num)
  }
  return result
}
