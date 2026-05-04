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
    // create an array of pairs from the hashmap ({'1':3,'2':1} becomes [['1',3],['2',1]])
    const numCounterInArr = Object.entries(numCounter);
    // sort arr in desc order, by index [1] which is num of occurences
    const sortedArr = numCounterInArr.sort((a,b) => b[1] - a[1])
    // grab top K elems from sorted arr
    const topKElem = sortedArr.slice(0, k)
    // extract just num from arr of arrs and convert from 'string' to number
    const topKArr = topKElem.map((pairs) => Number(pairs[0]))
    // return Top K Frequent Elements
    return topKArr;
};