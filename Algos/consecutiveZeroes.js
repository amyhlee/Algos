//Given a binary array, find the maximum number of consecutive 1s in this array.

function ones(arr) {
  let maxLength = 0
  let left = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      left = i
    }
    maxLength = Math.max(maxLength, i - left)
  }
  return maxLength
}



// Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

function flip(arr) {
  let maxLength = 0
  let left = 0 //initial marker
  let zeroIdx = -1 //zero marker

  //scout
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      left = zeroIdx + 1
      zeroIdx = i
    }
    maxLength = Math.max(maxLength, i - left + 1)
  }
  return maxLength
}



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
