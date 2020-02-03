function fruitBasket(arr) {
  let start = 0
  let maxLength = 0
  let cache = {}

  for (let i = 0; i < arr.length; i++) {
    let right = arr[i]
    if (!(right in cache)) {
      cache[right] = 1
    } else {
      cache[right]++
    }
    while (Object.keys(cache).length > 2) {
      let left = arr[start]
      if (cache[left]) {
        cache[left]--
      } if (cache[left] === 0) {
        delete cache[left]
      }
      start++
    }
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}


