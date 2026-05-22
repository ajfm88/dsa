/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // split the string into an array of individual chars
    let arrOfChars = s.split('')
    // map over this array of individual chars
    // a map transforms each element in an array and returns that transformed array
    let transformedChars = arrOfChars.map(char => {
        // the ASCII number for an uppercase letter is between 65 and 90
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            // if it's an uppercase letter, we turn it into its ASCII code number
            let numChar = char.charCodeAt()
            // we add 32 to it, and we use fromCharCode to turn it back into an ASCII char
            let backToLetter = String.fromCharCode(numChar + 32)
            // return it
            return backToLetter
        } else {
            // if the letter is lowercase, just return it
            return char;
        }
    })
    // we have now an array of individual chars, we need to return a string so we use .join
    return transformedChars.join("")
};