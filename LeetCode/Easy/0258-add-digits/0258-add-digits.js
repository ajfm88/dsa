/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // while loop as long as number has more than 1 digit
    while (num > 9) {
        // split number into individual digits
        const digits = num.toString().split("")
        // use higher-order array method reduce to add up individual digits
        const totSum = digits.reduce((acc, cur) => {
            // using Number(cur) to coerce the string into a number
            return acc + Number(cur)
        }, 0);
        // update num to the new number to avoid infinite loop
        num = totSum
    }
    return num;
};