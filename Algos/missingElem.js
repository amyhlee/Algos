function missingElem(arr) {
  const length = arr.length
  let sum = ((length + 1) * (length + 2)) / 2

  for (let i = 0; i < length; i++) {
    sum -= length[i]
  }
  return sum
}

function missingElem2(arr) {
  arr = arr.sort()

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i]
    const second = arr[i+1]

    if (second - first !== 1) {
      return first + 1
    }
  }
}
