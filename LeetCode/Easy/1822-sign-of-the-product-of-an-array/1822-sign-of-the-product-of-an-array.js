/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    // Early return if there's a 0 in the array.
    if (nums.includes(0))
        return 0;
    // Counter to keep track on whether the total count
    // of negative numbers are odd or even
    let counter = 0
    // iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // check whether the number is negative
        if (nums[i] < 0) {
            counter++
        }
    }
    // if the total count of negative numbers in 
    // the array is odd, return -1, otherwise return 1
    return counter % 2 === 0 ? 1 : -1;
};