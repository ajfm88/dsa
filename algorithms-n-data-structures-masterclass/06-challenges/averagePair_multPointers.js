/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, num) {
  // Initialize two pointers, 'start' and 'end', at the beginning and end of the array.
  let start = 0;
  let end = arr.length - 1;

  // Continue searching as long as 'start' is less than 'end'.
  while (start < end) {
    // Calculate the average of the current pair.
    let avg = (arr[start] + arr[end]) / 2;

    // If the average matches the target number, return true.
    if (avg === num) {
      return true;
    }
    // If the average is less than the target number, move 'start' pointer to the right.
    else if (avg < num) {
      start++;
    }
    // If the average is greater than the target number, move 'end' pointer to the left.
    else {
      end--;
    }
  }

  // If no matching pair is found, return false.
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
