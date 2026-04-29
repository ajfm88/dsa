/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (prevMap.has(complement)) {
            return [prevMap.get(complement), i];
        }

        prevMap.set(nums[i], i);
    }    
};