'''
01. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
'''

'''Brute force implementation'''

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if (nums[i] + nums[j] == target):
                    return [i, j]

'''
Time complexity:
n = 11
10, 9, 8..., 0
average = 5
n * (n/2)
(n^2)/2
O(n^2)
'''


'''Hashmap implementation 

[3, 9, 5, 2, 6, 8, 0] => target = 10
          i

 {3: 0, 9: 1, 5: 2, 2: 3, 6: 4, 8: 5}

 target - i = j
 10     - 8 = 2

 1. Iterate through array.
 2. Check to see whether hash table contains: target - i
 3. If not, insert i into hash table as key, and i's index as value
 4. If target - i IS inside the hash table, we return index of i, 
    value associated with key in the hash table

Lookup time in Big O notation: O(N)
'''

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_table = {}
        for index, value in enumerate(nums):
            if target - value in hash_table:
                return [hash_table[target - value], index]
            else:
                hash_table[value] = index
        return None