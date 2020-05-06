//Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.
// Return the least number of moves to make every value in A unique.

function unique(arr) {
  let max = Math.max(...arr)
  let count = 0
  let cache = {}

  for (let i = 0; i < arr.length; i++) {
    while(cache[arr[i]]) {
      count += 1
      arr[i] += 1
    }
    cache[arr[i]] = true
  }
  return count
}
