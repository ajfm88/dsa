'''
941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3

There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
'''
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        '''
        Left strictly ascending
        Right strictly descending
        Peak in middle
        '''
        # Look for the first peak
        firstPeak = None
        for i in range(1, len(arr) -1):
            if (arr[i] > arr[i-1] and arr[i] > arr[i + 1]):
                firstPeak = i
                break

        # If no peak, invalid
        if firstPeak == None:
            return False

        # Check left side
        for i in range(0, firstPeak):
            if not arr[i] < arr[i + 1]:
                return False

        # Check right side
        for i in range(firstPeak, len(arr) - 1):
            if not arr[i] > arr[i + 1]:
                return False

        return True

        # Time: O(n)
        # Space: O(1)