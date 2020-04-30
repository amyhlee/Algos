//Given an array with integers, return the sum of the subarray with the largest sum.
// A "subarray" is a subset of the original array that is contiguous and maintains the sequence of all elements from the original array.

// Example:
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function quadratic(arr) {
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    let windowSum = 0
    for (let j = i; j < arr.length; j++) {
      windowSum += arr[i]
      maxSum = Math.max(maxSum, windowSum)
    }
  }
  return maxSum
}

function linear(arr) {
  let maxSum = arr[0]
  let maxEnding = arr[0]

  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i])
    maxSum = Math.max(maxSum, maxEnding)
  }
  return maxSum
}
