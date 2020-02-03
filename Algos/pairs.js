// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

function pairs(arr, k) {
  let hash = {}
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (!(value in hash)) {
      hash[value] = 1
    } else {
      hash[value]++
    }
  }
  for (let j = 0; j < arr.length; j++) {
    let diff = arr[j] - k
    if (diff in hash) {
      count++
    }
  }
  return count
}

//pairSum for array with multiple negative numbers

function pairsNegative(arr, target) {
  let first = 0
  let second = 1
  arr = arr.sort()
  
  while (second < arr.length) {
    let sum = arr[first] + arr[second]
    
    if (sum === target) {
      return [first, second]
    } else if (sum < target) {
      second++
    } else {
      first++
    }
  }
  
}