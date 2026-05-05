/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // create hashmap with number of occurences for each num in arr
    const numCounter = nums.reduce((acc, num) => {
        acc[num] = (acc[num] ?? 0) + 1;
        return acc;
    }, {})
    // create buckets for the counts
    // nums.length + 1 because max frequency = nums.length
    // a number can appear at most nums.length times
    // buckets = [[], [], [], [], [], [], []]
    //            0   1   2   3   4   5   6  ← index = frequency
    const buckets = [];
    for (let i = 0; i < nums.length + 1; i++) buckets.push([]);
    // push numCounter hashmap elements into buckets
    for (const [num, count] of Object.entries(numCounter)) {
        buckets[count].push(Number(num));
    }
    // collect k elements
    const result = [];
    // read right to left = highest frequency first
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        // spread operator ... unpacks the bucket array into result
        result.push(...buckets[i]);
    }
    return result.slice(0, k);
};