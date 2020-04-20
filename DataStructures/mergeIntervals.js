function mergeInterval(arr) {
  if (arr.length < 2) return arr

  arr = arr.sort((a, b) => a[0] - b[0])

  let mergedArr = []
  let start = arr[0][0]
  let end = arr[0][1]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= end) {
      end = Math.max(end, arr[i][1])
    }else{
      mergedArr.push([start, end])
      start = arr[i][0]
      end = arr[i][1]
    }
  }
  mergedArr.push([start, end])
  return mergedArr
}
