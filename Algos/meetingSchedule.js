function meeting(firstDay, lastDay) {
  let combineArr = []
  let count = 0

  for (let i = 0; i < firstDay.length; i++) {
    let x = firstDay[i]
    let y = lastDay[i]
    combineArr.push([x, y])
  }

  let done = false
  while(!done) {
    done = true
    for (let i = 0; i < combineArr.length - 1; i++) {
      let left = combineArr[i][1] - combineArr[i][0]
      let right = combineArr[i+1][1] - combineArr[i+1][0]

      if (right < left) {
        done = false
        let temp = combineArr[i+1]
        combineArr[i+1] = combineArr[i]
        combineArr[i] = temp
      }
    }
  }
    let set = new Set ()

    for (let i = 0; i < combineArr.length; i++) {
      let start = combineArr[i][0]
      let end = combineArr[i][1]
      if (!set.has(start)) {
        set.add(start)
        count += 1
      } else {
        let temp = []
        let check = start

        while (check < end + 1) {
          temp.push(check)
          check += 1
        }
        for (let i = 0; i < temp.length; i++) {
          if (!set.has(temp[i])) {
            set.add(temp[i])
            count += 1
          }
        }
        temp = []
      }
    }
  return count
}
