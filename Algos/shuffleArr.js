//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]

// Return the array in the form [x1,y1,x2,y2,...,xn,yn]

//Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]

function shuffleArr(arr, n) {
  let result = []
  let xArr = nums.splice(0, n-0)
  let yArr = nums

  for (let i = 0; i < arr.length; i++) {
    result.push(xArr[i], yArr[i])
  }
  return result
}
