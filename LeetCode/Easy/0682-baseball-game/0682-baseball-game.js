/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    // empty array to store 
    let record = []

    // loop to iterate over the operations array
    for (let i = 0; i < operations.length; i++) {
        // value we will compute
        let newOperation;
        // create a switch statement for all 4 cases
        switch(operations[i]) {
            // '+' case
            case '+':
                // Record a new score that is the sum of the previous two scores.
                newOperation = record[record.length - 1] + record[record.length - 2]
                record.push(newOperation)
                break;
            // 'D' case
            case 'D':
                // Record a new score that is the double of the previous score.
                newOperation = record[record.length - 1] * 2
                record.push(newOperation)
                break;
            // 'C' case
            case 'C':
                // Invalidate the previous score, removing it from the record.
                record.pop();
                break;
            // An integer x case
            default:
                // Record a new score of x.
                record.push(Number(operations[i]))
                break;
        }
    }

    // return sum of everything
    return record.reduce((acc, cur) => acc + cur, 0);
};