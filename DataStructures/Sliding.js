//max sum subarray of k

let maxSum = 0
let windowSum = 0
let start = 0

// iterate over array

while (i >= k - 1)
//determine maxSum
maxSum = Math.max(maxSum, windowSum)
// shrink window
windowSum -= arr[start]
// slide window ahead
start++
//return maxSum


//
