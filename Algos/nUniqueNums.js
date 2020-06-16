//Given an integer n, return any array containing n unique integers such that they add up to 0.

function uniqueNums(num) {
  let result = []

  for (let i = 0; i < num; i++) {
    result[i] = i * 2 - num + 1
  }
  return result
}
