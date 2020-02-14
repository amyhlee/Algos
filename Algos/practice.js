function unique(str) {
  let result = {}

  for (let i  = 0; i < str.length; i++) {
    let char = str[i]
    if (!(char in result)) {
      result[char] = 1
    } else {
      result[char]++
    }
  }
  return Object.keys(result)
}

function unique(str) {
  str = str.split('')

  let uniqueChars = new Set (str)

  return uniqueChars.entries()
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let one = new Set(arr)
  let results = []

  for (let value of one.values()) {
    results.push(value)
  }

  return results

}

// alert( unique(values) ); // Hare, Krishna, :-O



//Write a function a clean(arr) that returns an array cleaned from anagrams.

//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//need helper function that compares two strings
//HOF to iterate over the array

function cleanSet(arr) {
  let finalArr = []
    if (arr.length < 2) {
      return arr
    }

    let start = 0
    let res;

    for (let i = 1; i < arr.length; i++) {
      if (arr[start].length === arr[i].length) {
        res = helper(arr[start], arr[i])
        start++
      }
    }
    finalArr.push(res)
    return finalArr
}

function helper(str1, str2) {
  let cache = {}
  let result = ''

  for (let char of str1) {
    if (!(char in cache)) {
      cache[char] = 1
    } else {
      cache[char]++
    }
  }
  for (let char of str2) {
    if (cache[char]) {
      cache[char]--
      if (cache[char] === 0) {
        delete cache[char]
      }
    }
    if (cache[char] === -1) {
      result += str2
    }
    if (Object.values(cache) === 0) {
      result += str1
      result += str2
    }
  }
  return result
}

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
