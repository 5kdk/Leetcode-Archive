/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prePrice = prices[i - 1];
    let curPrice = prices[i];
    if (prePrice < curPrice) {
      profit += curPrice - prePrice;
    }
  }
  return profit;
};