/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    // Create a variable to store the XOR result
    // Start with 0 because:
    // 0 ^ anyNumber = anyNumber
    let result = 0;

    // Loop from 0 up to n - 1
    for (let i = 0; i < n; i++) {

        // Generate the current number using the formula:
        // nums[i] = start + 2 * i
        let current = start + 2 * i;

        // Apply XOR between the current result
        // and the current number
        result = result ^ current;
    }

    // Return the final XOR value
    return result;
};