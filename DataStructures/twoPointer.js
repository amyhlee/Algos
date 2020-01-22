//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

let start
let end

while(start < end)
if (sum === target) return [start, end]
if (sum < target) start++
if (sum > target) end--

//Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the array.

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

////Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the array.

function removeDuplicates(arr) {
  let nextNonDuplicate = 1
  let i = 1

  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i]
      nextNonDuplicate++
    }
    i++
  }
  return nextNonDuplicate
}

//Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

let start = 0

while (start < arr.length) {
  if (arr[start] === target) {
    arr.splice(start, 1)
  }
  return arr.length
}

//Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

function squared(arr) {
  let n = arr.length
  let squares = Array(n).fill(0)
  let highestIdx = arr.length - 1
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let leftSquared = arr[left] * arr[left]
    let rightSquared = arr[right] * arr[right]

    if (leftSquared > rightSquared) {
      squares[highestIdx] = leftSquared
      left++
    } else {
      squares[highestIdx] = rightSquared
      right--
    }
    highestIdx--
  }
  return squares
}
