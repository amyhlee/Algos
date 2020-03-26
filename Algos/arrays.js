// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

function containsDuplicate(arr) {
  let set = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (set.has(nums[i])) {
      return true
    }else{
      set.add(nums[i])
    }
  }
  return false
}
