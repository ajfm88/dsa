/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // turn number into string, then array of strings, then back to number
    let arrOfDigits = String(n).split('').map(Number);
    // reduce to multiply them all
    let product = arrOfDigits.reduce((acc, cur) => acc * cur, 1);
    // reduce to add them all
    let sum = arrOfDigits.reduce((acc, cur) => acc + cur, 0);
    // return product vs sum
    return product - sum;
};