// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
  x = x.toString()

  let len = x.length
  for (let i = 0; i < len/2; i++) {
    if (x[len - 1 - i] !== x[i]) {
      return false
    }
  }
  return true
};


//two pointers solution

var isPalindrome = function(x) {
  if(x < 0) return false;
  x = x.toString()
  var i = 0;
  var j = x.length - 1;
  while(i < j){
      if(x[i] !== x[j]) return false;
      i++;
      j--;
  }
  return true;
};


//Given a STRING, determine if it is a valid palindrome

function isPalindrome(str) {

  //str = str.toString().replace(/[^a-z0-9]/gi, '').toLowerCase()
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase()

  let x = 0
  let y = str.length - 1

  if (str[x] != str[y]) {
    return false
  }
  x += 1
  y -= 1

  return true
}
