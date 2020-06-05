//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

function pascals(n) {
  let result = []

  for (let i = 0; i < n; i++) {
    result[i] = []
    result[i][0] = 1
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i-1][j-1] + result[i-1][j]
    }
    result[i][i] = 1
  }
  return result
}
