function areThereDuplicates(...args) {
  // Sort the array 'args' in ascending order.
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0; // Initialize the 'start' pointer to the first element.
  let next = 1; // Initialize the 'next' pointer to the second element.

  // Use a while loop to traverse the sorted array.
  while (next < args.length) {
    // Compare the elements at the 'start' and 'next' pointers.
    if (args[start] === args[next]) {
      // If the elements are equal, a duplicate has been found, so return 'true'.
      return true;
    }
    // Move both pointers one position to the right.
    start++;
    next++;
  }

  // If the loop completes without finding any duplicates, return 'false'.
  return false;
}
