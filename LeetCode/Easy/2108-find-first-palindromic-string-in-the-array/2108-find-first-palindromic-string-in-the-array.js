/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // iterate over the array of words
    for (const word of words) {
        // check if word is a palindrome
        if (isPalindrome(word)) {
            return word
        }
    }
    // return an empty string if no matches are found
    return "";
};

function isPalindrome(word) {
    // create left and right pointers
    let leftPointer = 0;
    let rightPointer = word.length - 1;
    // create a while loop to iterate until both pointers meet
    while (leftPointer < rightPointer) {
        // check if chars at specific positions are different
        if (word[leftPointer] !== word[rightPointer]) {
            return false;
        }
        // move pointers
        leftPointer++
        rightPointer--
    }
    return true;
}