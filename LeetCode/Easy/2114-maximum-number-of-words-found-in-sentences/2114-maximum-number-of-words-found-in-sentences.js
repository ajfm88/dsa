/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    // create variable to keep track of max num of words
    let maxCount = 0;

    // loop over array of sentences (each sentence is a string)
    for (const sentence of sentences) {
        // split each string on the space, and count the new array's length (word count)
        const newCount = sentence.split(" ").length;
        if (newCount > maxCount) {
            // update maxcount
            maxCount = newCount;
        }
    }
    return maxCount;
};