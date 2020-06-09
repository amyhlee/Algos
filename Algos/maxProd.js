
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

function maxProd(nums) {
  let largest = Math.max(...nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == largest) {
      nums.splice(i, 1)
      break
    }
  }
  let secondLargest = Math.max(...nums)

  return ((largest - 1) * (secondLargest - 1))
}
