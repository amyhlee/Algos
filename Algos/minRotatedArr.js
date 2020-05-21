//Find the minimum element

//Input: [3,4,5,1,2]
// Output: 1

function minRotatedArr(arr) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let mid = Math.floor((right - left) / 2 + left)

    if (arr[mid] > arr[right]) {
      left = mid + 1
    }else{
      right = mid
    }
  }
  return arr[left]
}
