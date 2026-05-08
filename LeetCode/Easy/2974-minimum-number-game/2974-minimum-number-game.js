/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    // create arr
    const arr = []

    // sort nums in ascending order
    nums.sort((a, b) => a - b)

    // we loop over the nums array, in pairs, hence i = i + 2
    for (let i = 0; i < nums.length; i += 2) {
        // bob appends first
        arr.push(nums[i + 1])
        // alice appends 2nd
        arr.push(nums[i])
    }

    // we return the sorted array
    return arr;
};