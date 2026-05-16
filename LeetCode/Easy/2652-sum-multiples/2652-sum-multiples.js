/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    // create empty array to hold divisible numbers
    let divisibleNums = []
    // loop over every number from 1 to n
    for (let i = 1; i <= n; i++) {
        // if any of them is divisible by 3, 5, or 7
        if (i % 3 === 0 || i % 5 === 0 ||i % 7 === 0) {
            // add them to the array
            divisibleNums.push(i);
        }
    }
    // use the reduce high order array method to add them all up
    const sumOfMultiples = divisibleNums.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    return sumOfMultiples;
};