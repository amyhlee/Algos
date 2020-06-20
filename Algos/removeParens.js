//A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

function removeParens(str) {
  let result = ''
  let count = 0

  for (let i = 0; i < str.length; i++) {
    let c = str[i]

    if (c == '(' && count++ > 0) result += c
    if (c == ')' && count-- > 0) result += c
  }
  return result
}
