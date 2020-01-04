// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

const numSubarrayProductLessThanK = function(nums, k) {
  let l = 0
  let prod = 1
  let res = 0
  for (r = 0; r < nums.length; r++) {
      prod = prod * nums[r]
      while(prod >= k && l < nums.length) {
          prod = prod / nums[l]
          l = l + 1
      }
      if (l < nums.length) {
          res = res + r - l + 1
      }

  }
  return res
};


