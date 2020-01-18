//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagnol(arr) {
  let rightSum = 0
  let leftSum = 0

  for (let i = 0; i < arr.length; i++) {
    rightSum += arr[i][i]
    leftSum += arr[i][Math.abs(i - (arr.length - 1))]
  }
  return Math.abs(rightSum = leftSum)
}
