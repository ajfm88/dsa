/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // create array to hold customers' wealth
    let customers = []
    // iterate over the nested array of arrays
    for (account of accounts) {
        // for each inner array, add up all of the bank accounts
        let curAcc = account.reduce((acc, cur) => acc + cur, 0);
        // push the total of all bank accounts for a specific customer
        // into the customers array
        customers.push(curAcc);
    }
    // Math.max works with just a number at a time, so we use
    // the spread operator to spread the whole array and return
    // the largest one.
    return Math.max(...customers);
};