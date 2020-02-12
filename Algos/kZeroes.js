//Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest (contiguous) subarray that contains only 1s.

function kZeroes(arr, k) {
  let left = 0
  let right;
  let counter = 0

  for (right = 0; right < arr.length; right++) {
    if (arr[right] == 0) counter--

    if (counter > 0) {
      if (arr[left] == 0) counter++
      left++
    }
  }
  return right - left
}
