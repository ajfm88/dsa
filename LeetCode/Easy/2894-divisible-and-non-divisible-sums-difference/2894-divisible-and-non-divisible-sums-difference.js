/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    // create arrays for divisible and non-divisible numbers
    let divisible = []
    let nonDivisible = []
    // iterate over every number from 1 to n and add them to either array
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            divisible.push(i)
        } else {
            nonDivisible.push(i)
        }
    }
    // both arrays are filled with number, now use reduce to get the total values of them
    const sumOfNonDivisibles = nonDivisible.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    const sumOfDivisibles = divisible.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    // return num1 (not divisible) - num2 (divisible)
    return sumOfNonDivisibles - sumOfDivisibles;
};