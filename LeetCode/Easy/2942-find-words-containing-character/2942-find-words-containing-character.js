/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    // Initialize array of indices
    let arrOfIndices = [];
    // loop over words
    for (let i = 0; i < words.length; i++) {
        // check to see if the word at the current index contains char
        if (words[i].includes(x)) {
            // if it does, push the current index to the arr
            arrOfIndices.push(i)
        }
    }
    // Return array of indices
    return arrOfIndices;
};