function maxSubarraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    console.log(currentSum);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
