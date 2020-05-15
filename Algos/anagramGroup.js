// Given an array of strings, group anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

function groupAnagram(arr) {
  let cache = {}

  for (let ele of arr) {
    let key = [...ele].sort()

    if (!cache[key]) {
      cache[key] = []
    }
    cache[key].push(ele)
  }
  return Object.values(cache)
}

function groupAnagrams(arr) {
  let cache = {}

  for (let word of arr) {
    let key = [...word].sort()

    if (cache[key]) {
      cache[key].push(word)
    }else{
      cache[key] = [word]
    }
  }
  return Object.values(cache)
}
