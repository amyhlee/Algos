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

// Given a non-empty array of integers, every element appears TWICE except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

function singleNumber(arr) {
  arr = arr.sort((a,b) => a - b)

  let i = 0
  let j = 0

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      arr.splice(i, 2)
    }else{
      i += 1
      j += 1
    }
  }
  return arr
}
