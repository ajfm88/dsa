/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    // counter for no of employees who worked target hours
    let count = 0;

    // iterate over the array
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++
        }
    }

    //return hours
    return count;
};