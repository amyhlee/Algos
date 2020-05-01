//Given a string and an array of queries, return an array that states if the query can be found in the given string

//Example:
////'aaaddeff' --> [ 'Yes', 'Yes', 'No', 'No', 'No' ]


function weights(str, queries) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let map = {}
  let value = 1

  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = value
    value++
  }
  let count = 1
  let weighted = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++
    }else if (count === 1) {
      weighted.push(map[str[i]])
    }else{
      while(count > 0) {
        weighted.push(map[str[i]] * count)
        count--
      }
      count = 1
    }
  }
  let result = []
  for (let i = 0; i < queries.length; i++) {
    if (weighted.indexOf(queries[i]) !== -1) {
      result.push('Yes')
    }else{
      result.push('No')
    }
  }
  return result
}
