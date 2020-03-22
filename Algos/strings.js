// Given a number, generate a string that produces only odd numbers of a or b

function generate(num) {
  return (n % 2 === 0) ? 'a'.repeat(n - 1) + 'b' : 'b'.repeat(n)
}



// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

function increaseDecrease(str) {
  let start = 0
  let n = str.length
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'R') {
      result.push(start)
      start += 1
    }else{
      result.push(n)
      n -= 1
    }
  }
  if (str[str.length - 1] === 'I') {
    result.push(start)
  }else{
    result.push(n)
  }
  return result
}


// reverse a string in place
// 'Let's go play outside' --> 's'teL og yalp edistuo'

function reverseString(str) {
  str = str.split(' ')

  function reverse(word) {
    let result = ''
    for (let i = word.length - 1; i >= 0; i--) {
      result += word[i]
    }
    return result
  }

  for (let i = 0; i < str.length; i++) {
    str[i] = reverse(str[i])
  }
  return str.join(' ')
}

//Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

function uniqueString(str) {
  str = str.split('')
  let res = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== res[res.length - 1]) {
      res.push(str[i])
    }else{
      res.pop()
    }
  }
  return res.join('')
}
