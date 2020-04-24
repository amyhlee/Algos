//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function move(arr) {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i]
      index++
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0
  }
  return arr
}
