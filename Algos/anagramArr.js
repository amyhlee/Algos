// Given an array of various anagrams, return a sorted array of the anagrams with lower ind

//["eat", "tea", "tan", "ate", "nat", "bat"] -->    [ 'eat', 'tan' ]

function anagramArrOptm(arr) {
  let cache = {}

  for (let ele of arr) {
    let key = [...ele].sort()

    if (!cache[key]) {
      cache[key] = []
    }
    cache[key].push(ele)
  }
  let result = []

  for (let word in cache) {
    if (Object.values(cache[word]).length > 1) {
      result.push(Object.values(cache[word])[0])
    }
  }
  return result
}

function anagramArr(arr) {
  let set = new Set ()

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let checked = compare(arr[i], arr[j])
      if (checked) {
        set.add(arr[i])
        arr.splice(j, 1)
      }
    }
  }
  let final = Array.from(set)
  return final.sort()
}

function compare(str1, str2) {
  str1 = str1.split('')
  str2 = str2.split('')
  let cache = {}

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i]
    if (!(char in cache)) {
      cache[char] = 1
    }else{
      cache[char] += 1
    }
  }
  for (let i = 0 ; i < str2.length; i++) {
    let letter = str2[i]
    if (letter in cache) {
      cache[letter] -= 1

      if (cache[letter] === 0) {
        delete cache[letter]
      }
    }
  }
  if (Object.keys(cache).length === 0) {
    return true
  }
  return false
}
