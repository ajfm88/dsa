function insertionSort(arr) {
  var currentVal; // Variable to store the current value being sorted

  for (var i = 1; i < arr.length; i++) {
    // Outer loop to iterate through the array
    currentVal = arr[i]; // Store the current element being sorted

    // Inner loop to find the correct position for currentVal in the sorted part of the array
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // Shift elements greater than currentVal one position to the right
    }
    arr[j + 1] = currentVal; // Place currentVal in its correct position
  }

  return arr; // Return the sorted array
}

insertionSort([2, 1, 9, 76, 4]); // Call the insertionSort function with an example array
