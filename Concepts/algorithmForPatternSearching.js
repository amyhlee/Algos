//Pattern searching is an important problem in computer science. When we do search for a string in notepad/word file or browser or database, pattern searching algorithms are used to show the search results.

// Native Algorithm for Pattern Searching
// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m.

function naiveSearch(string, pattern) {
  let M = string.length
  let N = pattern.length
  for (let i = 0; i < M-N; i++) {
    if (string[i] == pattern[0]) {
      let counter = 1
        for (let j = 1; j < pattern.length; j++) {
          if (string[i + j] == pattern[j]) {
            counter += 1
          }else{
            break
          }
        }
      if (counter === N) return i
    }
  }
  return -1
}

