/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // early return - if ransomNote > magazine, early return
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // create map for ransomNote and magazine
    // split the string into an array of individual chars, and count how many times it occurs
    let ransomMap = ransomNote.split('').reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {})

    // split the string into an array of individual chars, and count how many times it occurs
    let magazineMap = magazine.split('').reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {})

    // for every letter I need in ransom note
    // do I have enough in magazine?
    for (letter of ransomNote) {
        // if the letter doesnt exist in magazineMap or the quantity of letters is greater
        // in ransomMap than in magazineMap, then we return false
        if (!magazineMap[letter] || ransomMap[letter] > magazineMap[letter]) {
            return false;
        }
    }

    return true;
};