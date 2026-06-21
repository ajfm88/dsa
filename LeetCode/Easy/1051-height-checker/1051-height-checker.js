/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let counter = 0;
    // sort, in ascending order, the heights array
    // to create the expected array
    let expected = [...heights].sort((a, b) => a - b);
    // regular for loop to iterate over the heights array
    // and the expected array at the same time
    for (let i = 0; i < heights.length; i++) {
        // inside the for loop, create a condition so that if
        // heights[i] != expected[i] then add +1 to the counter
        if (heights[i] != expected[i]) {
            counter++;
        }
    }
    // return counter
    return counter;
};