// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

function pairs(arr, k) {
  arr = arr.sort()
  let i = 0
  let j = i + 1
  let count = 0

  while (j <= arr.length - 1) {
    let diff = arr[j] - arr[i]

    if (diff === k) {
      count++
      j++
    } else if (diff < k) {
      j++
    } else if (diff > k) {
      i++
    }
  }
  return count
}
