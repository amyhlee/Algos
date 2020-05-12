//Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

function prodInArr(arr) {
  let result = []
  result[0] = 1

  // everything to the right
  for (let i = 1; i < arr.length; i++) {
    result[i] = result[i-1] * arr[i-1]
  }

  // everything to the left
  let right = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= right
    right *= arr[i]
  }
  return result
}
