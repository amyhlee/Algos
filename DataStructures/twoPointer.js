//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

let start
let end

while(start < end)
if (sum === target) return [start, end]
if (sum < target) start++
if (sum > target) end--

//Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

//Array.splice(start, deleteCount) * mutates og array
//Array.slice(start, end) *end not included, returns shallow copy

let first = 0
let second = 1

while (second < arr.length) {
  if (arr[first] === arr[second]) {
    arr.splice(second, 1)
  } else {
    first++
    second++
  }
  return arr
}

// alternative with for loop
let second = 1

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[second]) {
    arr.splice(second, 1)
  } else {
    second++
  }
  return arr
}


