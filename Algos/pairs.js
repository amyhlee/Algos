// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

function pairs(arr, k) {
  let hash = {}
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (!(value in hash)) {
      hash[value] = 1
    } else {
      hash[value]++
    }
  }
  for (let j = 0; j < arr.length; j++) {
    let diff = arr[j] - k
    if (diff in hash) {
      count++
    }
  }
  return count
}
