function missingElem(arr) {
  const length = arr.length
  let sum = ((length + 1) * (length + 2)) / 2

  for (let i = 0; i < length; i++) {
    sum -= length[i]
  }
  return sum
}
