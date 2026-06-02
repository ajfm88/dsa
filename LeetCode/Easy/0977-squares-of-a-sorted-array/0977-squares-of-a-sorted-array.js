/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // Square every number with map
    const squaredArr = nums.map((num) => {
        return num ** 2
    })
    // Use .sort with a comparison function (a - b) to sort them in ascending order
    // then return the array;
    return squaredArr.sort((a, b) => a - b)
};