//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumBalloons(text) {
  let m = { b:0, a:0, l:0, o:0, n:0}

  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (char in m) m[char]++
  }

  let one_min = Math.min(m.b, m.a, m.l, m.om m.n)
  let two_min = Math.floor(Math.min(m.l/2, m.o/2))
  return Math.max(one_min, two_min)
}
