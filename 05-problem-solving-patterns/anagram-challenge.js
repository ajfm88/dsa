/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(arr1, arr2) {
  // first we see if they have the same length
  if (arr1.length !== arr2.length) return false;

  // second, we create objects to hold the values of the frequencies of the arrays
  let anagram1 = {};
  let anagram2 = {};

  // third, we populate these objects with each element of the arrays and its frequency
  // key = element (letter) of the array
  // value = how often the element (letter) appears in the array
  for (let elem of arr1) {
    anagram1[elem] = (anagram1[elem] || 0) + 1;
  }
  for (let elem of arr1) {
    anagram2[elem] = (anagram2[elem] || 0) + 1;
  }

  // fourth, iterate through each key and value pair in each object
  // make sure they match in value and in number
  for (let key in anagram1) {
    if (!anagram2[key] || anagram1[key] !== anagram2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(validAnagram("anagram", "nagaram")); // Output: true
console.log(validAnagram("rat", "car")); // Output: false but it is still giving me true
