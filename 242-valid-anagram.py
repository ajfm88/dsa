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
        
'''
Jay Wengrow solution:

Creating a histogram:
1. Check to see if element is in hash table.
2. If not, then add it as a key, with 1 as the value.
3. If there is, increment corresponding value by 1.

"state" -> "taste"
{"s": 1, "t": 2, "a": 1, "e": 1}

Anagram:

1. Create histogram from both strings
2. Return whether two histograms are equal

Big O Notation:

O(N)
'''

def is_anagram(string_1, string_2):
    hash_table_1 = {}
    hash_table_2 = {}

    for char in string_1:
        if char not in hash_table_1:
            hash_table_1[char] = 1
        else:
            hash_table_1[char] += 1

    for char in string_2:
        if char not in hash_table_2:
            hash_table_2[char] = 1
        else:
            hash_table_2[char] += 1

    return hash_table_1 == hash_table_2