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


// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function switch(s) {
  let start = 0
  let end = s.length - 1

  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]]
    start += 1
    end -= 1
  }
  return s
}

//For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
// Return the largest string X such that X divides str1 and X divides str2
//This solution is based on the Euclidean algorithm

function gcd(str1, str2) {
  if (str1 + str2 != str2 + str1) return ''
  else if (str1 == str2) return str1
  else if (str1.length > str2.length) {
    return gcd(str1.slice(str2.length), str2)
  }else{
    return gcd(str2.slice(str1.length), str1)
  }
}

//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

function firstUnique(str) {
  let cache = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!(char in cache)) {
      cache[char] = 1
    }else{
      cache[char]++
    }
  }
  for (let j = 0; j < str.length; j++) {
    let letter = str[j]
    if (cache[letter] == 1) {
      return i
    }
  }
  return -1
}

function firstUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i
    }
  }
  return -1
}
