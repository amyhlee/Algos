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
