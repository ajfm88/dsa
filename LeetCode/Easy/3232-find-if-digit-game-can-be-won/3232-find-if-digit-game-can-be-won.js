/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    // create two variables, for single digits and for double digits
    let singleDigits = 0;
    let doubleDigits = 0;
    // iterate over the array of numbers
    for (num of nums) {
        // check to see if num < 10 (single digits)
        if (num < 10) {
            singleDigits = singleDigits + num;
        // or if num >= 10 (double digits)
        } else if (num >= 10) {
            doubleDigits = doubleDigits + num;
         }
    }
    // if they're different, Alice can win, so return true.
    return singleDigits !== doubleDigits;
};