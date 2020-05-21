//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

//Input: [1,8,6,2,5,4,8,3,7]
//Output: 42

function waterContainer(arr) {
  let max = 0
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let min = Math.min(arr[left], arr[right])
    max = Math.max(max, min * (right - left - 1))

    if (arr[left] <= arr[right]) {
      left++
    }else{
      right--
    }
  }
  return max
}
