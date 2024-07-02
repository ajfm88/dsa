function areThereDuplicates() {
  // Create a new Set from the arguments object.
  // The Set will automatically remove duplicates, leaving only unique elements.
  const uniqueValues = new Set(arguments);

  // Check if the size of the Set (number of unique elements) is not equal to the number of arguments.
  // If they are not equal, it means there are duplicates, so return true.
  // Otherwise, return false, indicating that there are no duplicates.
  return uniqueValues.size !== arguments.length;
}
