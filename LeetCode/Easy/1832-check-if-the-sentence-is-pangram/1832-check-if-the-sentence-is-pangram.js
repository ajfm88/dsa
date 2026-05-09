/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // Create a set
    const lettersInSentence = new Set()

    // iterate over the string and add letters to set
    for (let i = 0; i < sentence.length; i++) {
        lettersInSentence.add(sentence[i])
    }

    // check to see if length of Set is 26
    return lettersInSentence.size === 26;
};