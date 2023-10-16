/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string. In other words, the
function should check whether the characters in the first string appear somewhere in the second
string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

/*
Solution - Iterative
This solution uses two pointers (i and j) to iterate through both strings, ensuring that the
characters in str1 appear in str2 without their order changing.
*/
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;

  // If str1 is an empty string, it's considered a subsequence of any string.
  if (!str1) return true;

  // Initialize two pointers, 'i' for str1 and 'j' for str2.
  while (j < str2.length) {
    // If the characters at the current positions match, increment 'i'.
    if (str2[j] === str1[i]) {
      i++;
    }

    // If 'i' reaches the end of str1, all characters in str1 have been found in str2.
    if (i === str1.length) {
      return true;
    }

    // Move the 'j' pointer to the next character in str2.
    j++;
  }

  // If 'i' never reaches the end of str1, it means not all characters of str1 were found in str2.
  return false;
}

/*
Solution - Recursive but not O(1) Space
This solution uses recursion to check if str1 is a subsequence of str2. It continues to compare 
characters in both strings, checking if the first characters match. If they do, it calls the 
function recursively with the remaining characters. However, this recursive solution uses 
additional space in the call stack for each function call, so it doesn't meet the O(1) 
space complexity constraint.
*/
function isSubsequence(str1, str2) {
  // If str1 is empty, it's considered a subsequence of any string.
  if (str1.length === 0) return true;

  // If str2 is empty and str1 is not, str1 cannot be a subsequence.
  if (str2.length === 0) return false;

  // If the first characters in both strings match, recursively check the rest of the strings.
  if (str2[0] === str1[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  }

  // If the first characters do not match, continue checking the remaining characters in str2.
  return isSubsequence(str1, str2.slice(1));
}
