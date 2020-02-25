//Given a string, return a truncated version
////'AAABBBBABCCCC777777' -> 'A*3B*4C*47*6'

function truncate(str) {
  let result = ''
  let counter = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      counter++
    } else if (str[i] !== str[i+1]) {
  //  else if (counter === 0) {    // alternative
      result += str[i]
    } else {
      counter++
      result += str[i] + '*' + counter
      counter = 0
    }
  }
  return str
}


//Given the reverse of the above, return the resulting string
//'A*3B*4C*47*6' -> 'AAABBBBABCCCC777777'

function reverse(str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i+1] === '*') {
      result += str[i].repeat(parseInt(str[i+2]))
    } else if (str[i] !== '*' && str[i - 1] !== '*'){
      result += str[i]
    }
  }
  return result
}

