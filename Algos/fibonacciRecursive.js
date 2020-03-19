// Given a number n, return the index value of the Fibonacci sequence

function fibonacciRecursive(n) {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

function fibonacciIterative(n) {
  let arr = [0 ,1]
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}

// memoization

function fibonacciMemoization(n, memo) {
  memo = memo || {}

  if (memo[num]) return memo[num]
  if (n <= 1) return 1

  return memo[num] = fibonacciRecursive(n - 1, memo) + fibonacciRecursive(n - 2, memo)
}
