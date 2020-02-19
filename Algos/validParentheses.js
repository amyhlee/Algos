//Given a string '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function valid(str) {
  let stack = []

  if (str.length === 0 || str === 'null') return false

  let splitStr = str.split('')

  for (let c of splitStr) {
    if (c === '(') stack.push(')')
    else if (c === '{') stack.push('}')
    else if (c === '[') stack.push(']')
    else if (stack.length === 0 || c !== stack.pop()) return false
  }
  if (str.length === 0) return true
  return false
}
