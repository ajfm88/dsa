/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(arr, num) {
  // Check if the length of the array is less than 'num'.
  // If so, it's impossible to find a subarray of 'num' length.
  if (arr.length < num) {
    return null;
  }

  // Initialize 'total' to 0; it will store the maximum subarray sum.
  let total = 0;

  // Calculate the initial sum of the first subarray of length 'num'.
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  // 'currentTotal' keeps track of the running sum of the current subarray.
  let currentTotal = total;

  // Iterate through the array starting from the (num)-th element.
  for (let i = num; i < arr.length; i++) {
    // Update 'currentTotal' by adding the current element
    // and subtracting the element that is (num) positions back.
    currentTotal += arr[i] - arr[i - num];

    // Update 'total' to be the maximum between 'total' and 'currentTotal'.
    // This ensures 'total' holds the maximum subarray sum encountered so far.
    total = Math.max(total, currentTotal);
  }

  // Return 'total', which now contains the maximum subarray sum.
  return total;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
