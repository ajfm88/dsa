/*Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and 
returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to 
implement it here - 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
and here - 
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1

binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2

binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16

binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1*/

function binarySearch(sortedArr, value) {
  let min = 0;
  let max = sortedArr.length;

  for (let i = 0; i < sortedArr.length; i++) {
    let middlePoint = (min + max) / 2;
    if (num == value) return i;
    console.log(i);

    // if value too small, left pointer up

    //if value too big, right pointer down
  }

  if (num != value) return -1;
}

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
