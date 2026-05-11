/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    // counter for digits
    let counter = 0;
    // split figure into individual digits
    const digits = num.toString().split('');
    console.log(digits);
    // iterate over the array, dividing each element against the original number
    for (let i = 0; i < digits.length; i++) {
        // if it returns 0, add +1 to counter
        if ((num % Number(digits[i])) === 0) {
            counter += 1;
        }
    }
    return counter;
};