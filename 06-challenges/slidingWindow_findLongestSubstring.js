/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let longest = 0; // Initialize a variable to store the length of the longest substring.
  let seen = {}; // Create an object to keep track of the most recent index of each character.
  let start = 0; // Initialize a variable to store the starting index of the current substring.

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Get the current character in the string.

    // If the character has been seen before (i.e., exists in the 'seen' object),
    // update the 'start' index to be the maximum of the current 'start' index
    // and the next index of the previously seen character.
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Calculate the length of the current substring, add 1 to account for the current character,
    // and update 'longest' to be the maximum of its current value and the new calculated length.
    longest = Math.max(longest, i - start + 1);

    // Store the index of the next occurrence of the current character in the 'seen' object
    // to avoid double-counting the character.
    seen[char] = i + 1;
  }

  // Return the length of the longest substring with distinct characters.
  return longest;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
