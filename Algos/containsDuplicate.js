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
