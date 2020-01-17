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


// longest substring with no more than k distinct characters

//Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

let start = 0
let maxLength = 0
let cache = {}

//iterate over string
//place letters into cache up to k
//in for loop, while loop
while (Object.keys(cache).length > k)
//start narrowing window
let leftChar = str[start]
cache[leftChar]--
if (cache[leftChar] === 0) delete cache[leftChar]
//move window forward
start++
//determine maxLength
maxLength = Math.max(maxLength, i - start + 1)
//return maxLength


//Given a string and a pattern, find out if the string contains any permutation of the pattern

let start = 0
let matched = 0
let cache = {}

//iterate over pattern and place into cache
//outside of first for loop, iterate over string
let letter = str[i]
if (letter in cache) {
  cache[letter]--
  if (cache[letter] === 0) {
    matched++
  }
  //check if matched equals pattern
  if (matched === Object.keys(cache).length) {
    return true
  }
  //otherwise, slide forward IF not while
  if(j >= pattern.length - 1) {
    let leftChar = str[start]
    start++
    if (leftChar in cache) {
      if (cache[leftChar] === 0) {
        matched--
      }
      //not a match, so reset count
      cache[leftChar]++
    }
  }
}
return false
}

