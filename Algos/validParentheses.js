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
  if (stack.length === 0) return true
  return false
}

//return how many parentheses need to be added to balance

function balance(str) {
  let balanced = 0
  let answer = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (char == '(') {
      balanced++
    } else {
      balanced--
    }

    if (balanced === -1) {
      answer++
      balanced++
    }
  }
  return Math.abs(answer + balanced)
}

//generate parentheses
function generate(num) {
  let results = []

  function build(leftCount, rightCount, partial) {
    if (leftCount > rightCount) return
    if (leftCount === 0 && rightCount === 0) {
      results.push(partial)
    }
    if (leftCount > 0) {
      build(leftCount - 1, rightCount, partial += '(')
    }
    if (rightCount > 0) {
      build(leftCount, rightCount - 1, partial += ')')
    }
  }
  build(num, num, partial)
  return results
}

//Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

function valid(s) {
  let low = 0
  let high = 0

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (c === '(') {
      low++
      high++
    }else if (c === ')') {
      if (low > 0) {
        low--
      }
      high--
    }else{
      if (low > 0) {
        low--
      }
      high++
    }
    if (high < 0) return false
  }
  return low == 0
}
