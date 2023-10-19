/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(nums, sum) {
  let total = 0; // Initialize a variable to keep track of the current sum.
  let start = 0; // Initialize a pointer for the start of the subarray.
  let end = 0; // Initialize a pointer for the end of the subarray.
  let minLen = Infinity; // Initialize a variable to store the minimum subarray length.

  while (start < nums.length) {
    // If the current window doesn't add up to the given sum and we haven't reached the end of the array, expand the window to the right.
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // If the current window's sum is greater than or equal to the given sum, we can potentially shrink the window.
    else if (total >= sum) {
      // Update 'minLen' with the minimum length encountered so far.
      minLen = Math.min(minLen, end - start);
      // Remove the element at the 'start' of the subarray from the current sum and move the 'start' pointer to the right.
      total -= nums[start];
      start++;
    }
    // If the current total is less than the required total but we reach the end of the array, break the loop.
    else {
      break;
    }
  }

  // Return the minimum subarray length that meets the sum requirement or 0 if none exists.
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
