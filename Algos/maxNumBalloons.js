//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumBalloons(text) {
  let m = { b:0, a:0, l:0, o:0, n:0}

  for (let char in text) {
    if (m[text] !== 0) m[text]++
  }

  let words = 0

  while(true) {
    for (let char in 'balloon') {
      if (m[char] === 0) return words
      m[char]--
    }
    words++
  }
}
