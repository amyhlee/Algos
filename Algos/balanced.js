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

