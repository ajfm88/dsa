/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // Set two counters. One for the y-axis and one for the x-axis
    let xCounter = 0;
    let yCounter = 0;
    // iterate over the string moves and add or substract based on values:
    for (const move of moves) {
        switch(move) {
            // Left and Right cases.
            case 'R':
                xCounter++;
                break;
            case 'L':
                xCounter--;
                break;
            // Up and Down cases.
            case 'U':
                yCounter++;
                break;
            case 'D':
                yCounter--;
                break;
        }
    }
    // return true if robot is back in the origina (both values are 0), otherwise return false.
    return xCounter === 0 && yCounter === 0;
};