/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    // define counter
    let counter = 0;
    // split string into individual chars
    let chars = s.split('');
    // map over the array
    let lowercaseChars = chars.map(char => {
        // ASCII number for uppercase is between 65 and 90
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            // if uppercase, turn into ASCII code number
            let numChar = char.charCodeAt();
            // add 32 to it, then turn back into alphabetical char
            let letter = String.fromCharCode(numChar + 32);
            return letter;
        } else {
            // if already in lowercase, just return it
            return char;
        }
    })
    // compare adjacent chars
    for (let i = 0; i < lowercaseChars.length - 1; i++) {
        // if adjacent chars are different
        if (lowercaseChars[i] !== lowercaseChars[i + 1]) {
            // increase counter
            counter += 1
        }
    }
    return counter;
};