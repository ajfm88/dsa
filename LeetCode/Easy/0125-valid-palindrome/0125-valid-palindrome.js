/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let leftPointer = 0;
    let rightPointer = cleanString.length - 1
    while (leftPointer < rightPointer) {
        if (cleanString[leftPointer] != cleanString[rightPointer])
            return false;

        leftPointer++
        rightPointer--
    }
    return true;
};