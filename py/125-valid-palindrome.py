'''
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
'''
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # 1. remove all non alphanumeric characters
        alpha_num_strings = [char for char in s if char.isalnum()]
        
        # 2. create two pointers
        pointer_a = 0
        pointer_b = len(alpha_num_strings) - 1
        
        # 3. while loop
        while pointer_a < pointer_b:
            if (alpha_num_strings[pointer_a].lower() != alpha_num_strings[pointer_b].lower()):
                return False
            pointer_a = pointer_a + 1
            pointer_b = pointer_b - 1
            
        return True