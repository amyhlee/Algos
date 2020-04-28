// Say you have an array prices for which the ith element is the price of a given stock on day i

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times)

//Input: [7,1,5,3,6,4]
//Output: 5

//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Not 7-1 = 6, as selling price needs to be larger than buying price.
//***Using Kadane's algorithm***

function stocksII(prices) {
  let maxProfit = 0
  let minBuyPrice = Infinit

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i]
    }
    maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice)
  }
  return maxProfit
}

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

function stocks(prices) {
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}
