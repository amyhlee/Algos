// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.

function smallerNums(arr) {
  let result = []
  const sorted = [...arr].sort((a,b) => a-b)
  let map = new Map()

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let value = map.get(arr[i])
    result.push(value)
  }
  return result
}
