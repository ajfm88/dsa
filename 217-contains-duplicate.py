'''
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false

Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
'''

# Brute force approach
'''
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
                
        return False
'''

# Sorting approach
'''
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()

        for i in range(0, len(nums) -1):
            if nums[i] == nums[i + 1]:
                return True
            
        return False
'''

# Map approach
'''
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        number_counts = {}

        for number in nums:
            if number not in number_counts:
                number_counts[number] = 1
            else:
                return True
            
        return False
'''

# Set approach
'''
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        number_set = set()

        for number in nums:
            if number not in number_set:
                number_set.add(number)
            else:
                return True
            
        return False
'''

# Python’s Counter class approach
from collections import Counter

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        distinct_count = len(Counter(nums))
        return len(nums) > distinct_count
        # number of keys in the map (key_count) is ALWAYS EQUAL 
        # to the number of distinc values in the array distinc_count
        # IF len(nums) == distinc_count THEN no duplicates
        # If len(nums) > distinc_count THEN at least one dupe