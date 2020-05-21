////Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand
//You are given a target value to search. If found in the array return its index, otherwise return -1.

function searchRotatedArr(arr) {
  let left = 0
  let right = arr.length - 1

  while(left <= right) {
    let mid = Math.floor((right - left) / 2 + left)

    if (arr[mid] === target) return mid

    if (arr[mid] > arr[mid+1]) {
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return -1
}
