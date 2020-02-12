//Given two arrays, write a function to compute their intersection.
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [4,9]


//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2]


function intersect(arr1, arr2) {
  let firstSet = new Set(arr1)
  let secondSet = new Set()

  for (let i = 0; i < arr2.length; i++) {
    let value = arr2[i]
    if (firstSet.has(value)) {
      secondSet.add(value)
    }
  }
  return Array.from(secondSet)
}

//Given two arrays, write a function to compute their intersection.
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [4,9]

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2,2]

function intersect(arr1, arr2) {
  let cache = {}
  let arr = []

  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i]
    if (!(value in cache)) {
      cache[value] = 1
    } else {
      cache[value]++
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    let num = arr2[j]

    if (num > 0) {
      cache[num]--
      arr.push(num)
    }
  }
  return arr
}
