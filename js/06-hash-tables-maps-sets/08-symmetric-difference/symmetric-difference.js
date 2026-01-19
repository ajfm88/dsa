function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const num of arr1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of arr2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

module.exports = symmetricDifference;
