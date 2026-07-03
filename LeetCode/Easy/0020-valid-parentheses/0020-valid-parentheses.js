/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Each closing parentheses should match
    // with the latest UNUSED opening one.

    // We'll cross out pairs that have
    // already been used up.

    // early check to see if it's an even-char string
    if (s.length % 2 !== 0)
        return false;

    // create a set with all of the open brackets
    let setOpens = new Set(["(","[","{"]);

    // create a map with all of the closing brackets
    // that correspond to the opening ones
    let closeToOpen = {')': '(', '}': '{', ']': '['}

    // create array to hold opening 
    // bracket/parenthesis/curly bracket
    let unusedOpens = []

    // create array to hold closing bracket
    // to try and find its match
    let matchingOpen

    // loop over s with a for of loop
    for (const bracket of s) {
        // is it an open bracket?
        if (setOpens.has(bracket)) {
            // if yes, we add to unusedOpens
            unusedOpens.push(bracket)
        } else {
            // match current bracket, via key:value pair, with the closeToOpen object
            matchingOpen = closeToOpen[bracket]
            // close bracket, does it match with latest opening bracket?
            if ((unusedOpens.length > 0) && matchingOpen == unusedOpens[unusedOpens.length - 1]) {
                unusedOpens.pop()
            } else {
                return false;
            }
        }
    }
    // if we get to this point, we just check that
    // there are no left unusedOpen brackets and return
    // either true or false based on that condition
    return unusedOpens.length === 0;
};