/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    // use reduce to iterate over every element in the array and add it up
    let elemSum = nums.reduce((acc, num) => acc + num, 0)
    
    let digitSum = nums
        // use flatMap to convert each number into an array of its digits, but flattening the array into one
        .flatMap(num => num.toString().split(''))
        // map over the array of string numbers to turn them back into int
        .map(Number)
        // use reduce to add them all up
        .reduce((acc, num) => acc + num, 0)

    // the prob is asking for the absolute value of the difference
    return Math.abs(elemSum - digitSum)
};