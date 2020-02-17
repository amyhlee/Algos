//Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

// Write a function to return the next letter of the given ‘key’.

function nextGreatest(arr, key) {
  let start = 0
  let end = arr.length - 1

  if (key < arr[0] || key > arr[end]) {
    return arr[0]
  }

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)

    if (key < arr[end]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return arr[start % arr.length]
}
