//Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

function isHappy(n) {
  let set = new Set()
  while(n != 1) {
    let sum = 0
    let current = n
    while(current != 0) {
      let num = current % 10
      sum += num * num
      current = Math.floor(current / 10)
    }
    if (set.has(sum)) {
      return false
    }else{
      set.add(sum)
      n = sum
    }
  }
  return true
}
