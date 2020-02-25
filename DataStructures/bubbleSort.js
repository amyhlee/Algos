const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}


function bubbleSort(arr) {
  let done = false

  while(!done) {
    done = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) {
        done = false
        let tmp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

