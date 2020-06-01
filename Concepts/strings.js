// .replace with regex

function removeVowel(str) {
  str = str.replace(/[aeiou]/gi, '')
  return str    //'basket' --> 'bskt'
}

function removeConsonants(str) {
  str = str.replace(/[^aeiou]/gi, '')
  return str     //'basket' --> 'ae'
}


// .match with regex

function removeVowel(str) {
  const regex = /[^aeiou]/gi
  const result = str.match(regex)
  return result.join('')  //'basket' --> 'bskt'
}
