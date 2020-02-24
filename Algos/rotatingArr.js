function rotation(arr, n) {
  let len = arr.length

  n = n % len
  if (n < 0) {
    n = n + len
  }

  let temp = []

  for (let i = 0; i < n; i++) {
    temp[i] = arr[len - n + i]
  }

  for (let i = len - 1; i >= n; i--) {
    arr[i] = arr[i - n]
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i]
  }
  return arr
}
