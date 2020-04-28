// Say you have an array prices for which the ith element is the price of a given stock on day i

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times)

function stocks(prices) {
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}
