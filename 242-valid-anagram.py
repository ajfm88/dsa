'''
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
'''

'''My solution with hash map'''
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        charsOfS = {}
        charsOfT = {}
        for char in s:
            if char in charsOfS:
                print("add 1 to the value of that key value pair")
                charsOfS[char] += 1
            else:
                print("add a new char")
                charsOfS[char] = 1
        print(charsOfS)
        for char in t:
            if char in charsOfT:
                charsOfT[char] += 1
            else:
                charsOfT[char] = 1
        print(charsOfT)
        if charsOfS == charsOfT:
            return True
        else:
            return False