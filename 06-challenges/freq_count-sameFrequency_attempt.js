/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  // establish two objects to store the nums
  let digitsOfNum1 = {};
  let digitsOfNum2 = {};

  // convert numbers to strings
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();

  // edge case
  if (numStr1.length !== numStr2.length) {
    return false;
  }

  // iterate over each figure and pass it to an object
  // key = digit, value = number of times it appears in the figure
  for (let i = 0; i < numStr1.length; i++) {
    if (digitsOfNum1[numStr1[i]]) {
      digitsOfNum1[numStr1[i]]++;
    } else {
      digitsOfNum1[numStr1[i]] = 1;
    }
    if (digitsOfNum2[numStr2[i]]) {
      digitsOfNum2[numStr2[i]]++;
    } else {
      digitsOfNum2[numStr2[i]] = 1;
    }
  }

  console.log(digitsOfNum1);
  console.log(digitsOfNum2);

  // check whether or not both numbers have the same digits
  // at the same frequency

  for (const key in digitsOfNum1) {
    if (!digitsOfNum2[key] || digitsOfNum1[key] !== digitsOfNum2[key]) {
      return false;
    }
  }

  return true; // If all checks pass, return true
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
