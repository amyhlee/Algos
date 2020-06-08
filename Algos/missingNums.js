//given an array, return an array that contains the numbers to create an array of consecutive numbers

function missingNums(arr) {
  let result = []

  for (let i = 0; i < arr.length - 1; i++) {
    let val = arr[i] + 1

    if (arr.indexOf(val) == -1) {
      result.push(val)
    }
  }
  return result
}

