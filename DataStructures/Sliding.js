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


//smallest subarray of k
let windowSum = 0
let start = 0
let minLength = Infinity

//iterate over array

while (windowSum >= k)
minLength = Math.min(minLength, i - start + 1)
//shrink window
windowSum -= arr[start]
//slide window forward
start++

// outside for loop, place edge case
if (minLength === Infinity) return 0
// otherwise return minLength
