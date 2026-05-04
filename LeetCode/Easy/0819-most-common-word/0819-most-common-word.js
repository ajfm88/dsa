/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);  // initialize set that would allow to use .has

    const wordCounter = paragraph.toLowerCase()  // to lowercase
                                .replace(/[^a-z0-9\s]/g," ")  // remove punctuation
                                .split(/\s+/)  // split into array of words
                                .filter(word => word !== "") // filter out "words" that might just be empty spaces
                                .filter(word => !bannedSet.has(word))  // O(1) instant filter with using Set and .has
                                .reduce((acc, word) => {
                                    acc[word] = (acc[word] ?? 0) + 1;
                                    return acc;
                                }, {})  // count number of instances in which one word appears

    return Object.entries(wordCounter) // we compare numbers with each other, and return a if greater, or b if greater
                            .reduce((a, b) => a[1] > b[1] ? a : b)[0]  // [0] to make sure we return just the word ["ball", 1]
};