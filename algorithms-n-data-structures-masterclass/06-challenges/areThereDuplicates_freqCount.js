function areThereDuplicates() {
  // Create an empty object to store the frequency of arguments
  let collection = {};

  // Loop through the arguments
  for (let val in arguments) {
    // For each argument, we increment its frequency in the collection object.
    // If it's not already in the collection, we initialize it with 1.
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  // Now, loop through the collection object to check if any argument has a frequency greater than 1 (indicating a duplicate).
  for (let key in collection) {
    if (collection[key] > 1) {
      return true; // If a duplicate is found, return true.
    }
  }

  return false; // If no duplicates are found, return false.
}
