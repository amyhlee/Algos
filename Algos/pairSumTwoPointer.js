// optimized, using cache

function pairSum(arr, target) {
  let cache = {}
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    if (diff in cache) {
      return [diff, arr[i]]
    }else{
      cache[arr[i]] = i
    }
  }
  return -1
}


function pairSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]
      }
    }
  }
}

function pairSumTwoPointer(arr, target) {
  let start = 0
  let end = arr.length - 1

  arr = arr.sort()

  while(start < end) {
    if (arr[start] + arr[end] === target) {
      return [arr[start], arr[end]]
    } else if (arr[start] + arr[end] > target) {
      end--
    } else {
      start++
    }
  }
}

