// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

function removeDuplicatesMatchingKey(arr, key) {
  let count = 0
  let start = 0

  while(start < arr.length) {
    if(arr[start] !== key) {
      count++
    }
    start++
  }
  return count
}
