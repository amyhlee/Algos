function balancedStringSplit(str) {
  let balance = 0
  let numOfStrings = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'R') balance -= 1
    if (str[i] == 'L') balance += 1

    if (balance === 0) numOfStrings += 1
  }
  return numOfStrings
}
