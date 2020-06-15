//Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

//Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]

function finalPrice(prices) {
  let s = []
  let i = prices.length - 1
  let p, d

  while(i >= 0) {
    p = prices[i]

    while(s.length) {
      d = s[s.length - 1]

      if (d <= p) {
        prices[i] -= d
        break
      }else{
        s.pop()
      }
    }
    s.push(p)
    i -= 1
  }
  return prices
}
