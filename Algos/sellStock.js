//Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

function maxProfit(prices) {
  let maxProfit = 0
  let minBuyPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i]
    }
    maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice)
  }
  return maxProfit
}

function maxProfit(prices) {
  let profit = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let num = prices[i]

    min = Math.min(min, num)
    profit = Math.max(profit, num - min)
  }
  return profit
}
