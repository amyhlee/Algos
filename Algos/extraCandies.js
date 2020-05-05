//Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

function candies(candies, extraCandies) {
  let maxNum = Math.max(...candies)
  let result = []

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxNum)
  }
  return result
}
