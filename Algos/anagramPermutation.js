//Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome.

function anagramPermutation(str) {
  let set = new Set ()

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (char in set) {
      set.delete(char)
    }else{
      set.add(char)
    }
  }
  if (set.size > 1) return false
  return true
}
