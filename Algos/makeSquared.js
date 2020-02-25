// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

function makeSquared(arr) {
  let n = arr.length
  let squaredArr = Array(n).fill(0)
  let highestIndex = n - 1
  let left = 0
  let right = n- 1

  while(left <= right) {
    let leftSquared = arr[left] * arr[left]
    let rightSquared = arr[right] * arr[right]

    if (leftSquared > rightSquared) {
      squaredArr[highestIndex] = leftSquared
      left += 1
    } else {
      squaredArr[highestIndex] = rightSquared
      right -= 1
    }
    highestIndex -= 1
  }
  return squaredArr
}
