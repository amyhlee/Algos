// .replace with regex

function removeVowel(str) {
  str = str.replace(/[aeiou]/gi, '')
  return str    //'basket' --> 'bskt'
}

function removeConsonants(str) {
  str = str.replace(/[^aeiou]/gi, '')
  return str     //'basket' --> 'ae'
}
