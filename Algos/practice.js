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
  return Array.from(new Set(arr))
}

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
