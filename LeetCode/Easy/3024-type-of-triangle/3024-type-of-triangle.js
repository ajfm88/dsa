/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    // check that the sum of any two sides is greater than the third side
    if (nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0]) {
        // check triangle conditions
        // all 3 sides are equal
        if (nums[0] === nums[1] && nums[1] === nums[2]) {
            return "equilateral"
        // two sides are equal
        } else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
            return "isosceles"
        // none of the sides are equal
        } else if (nums[0] !== nums[1] && nums[1] !== nums[2] && nums[2] !== nums[0]) {
            return "scalene"
        }
    }
    return "none"
};