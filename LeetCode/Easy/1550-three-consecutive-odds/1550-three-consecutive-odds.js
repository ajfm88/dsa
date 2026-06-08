/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    // counter to keep track of three consecutive odd numbers
    let counter = 0;
    // iterate over the arr array
    for (let i = 0; i < arr.length; i++) {
        // check if the number is odd
        if (arr[i] % 2 !== 0) {
            // if it is, increase counter
            counter++
            // if we have reached 3, early return
            if (counter === 3) return true
        } else {
            // if it is not, reset counter to 0
            counter = 0
        }
    }
    // if we never reached 3, return false
    return false;
};