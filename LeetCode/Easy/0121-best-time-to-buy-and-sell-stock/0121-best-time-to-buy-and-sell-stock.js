/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // initialize max profit to 0
    let maxProfit = 0;
    // initialize lowest preceeding price
    let lowestPreceedingPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        // for every day we can sell, compute profit
        // today's sales' price minus lowest preceeding price
        let currentProfit = prices[i] - lowestPreceedingPrice;
        // if currentProfit is bigger, update maxProfit
        maxProfit = Math.max(maxProfit, currentProfit);
        // if currentPrice is lower, update lowestPreceedingPrice
        lowestPreceedingPrice = Math.min(lowestPreceedingPrice, prices[i]);
    }
    // return max profit
    return maxProfit;
};