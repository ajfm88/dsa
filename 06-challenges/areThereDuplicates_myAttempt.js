/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts 
a variable number of arguments, and checks whether there are any 
duplicates among the arguments passed in.  You can solve this 
using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

function areThereDuplicates(...elements) {
  // Create an empty object to store the frequency of elements
  const frequencyCounter = {};

  // Loop through the elements
  for (let element of elements) {
    // If the element is not in the frequencyCounter, initialize it with 1,
    // else increment its frequency
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;

    // If the frequency is greater than 1, we found a duplicate, return true
    if (frequencyCounter[element] > 1) {
      return true;
    }
  }

  // If no duplicates are found, return false
  return false;
}

// Test cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates(12, 15, 16, 20, 43, 52, 99, 53, 23, 52)); // true
