/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // hasmap
    const chars = {}
    // iterate through the whole string and create a hashmap
    for (let i = 0; i < s.length; i++) {
        chars[s[i]] = (chars[s[i]] ?? 0) + 1
    }
    // iterate through the whole string and compare its value to my object
    for (let i = 0; i < s.length; i++) {
        if (chars[s[i]] === 1) {
            return i
        }
    }
    return -1
};