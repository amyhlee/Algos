//Write a function called AveragePair. Given a sorted array of integers and the target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target

function average(num1, num2) {
  return Math.floor(num1 + num2/ 2)
}

function averagePair(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let avg = average(arr[start], arr[end])

    if (avg === target) {
      return [arr[start], arr[end]]
    } else if (avg > target) {
      end--
    } else {
      start++
    }
  }
  return 'not found'
}
