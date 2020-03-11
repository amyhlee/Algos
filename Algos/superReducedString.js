//given a string, remove all pairs of letters within the string

function stringReduced(str) {
  let arr = str.split('')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      arr.splice(i, 2)
      i = -1
    }
  }
  return arr.join('')
}
