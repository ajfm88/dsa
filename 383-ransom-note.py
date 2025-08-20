'''
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:
* 1 <= ransomNote.length, magazine.length <= 105
* ransomNote and magazine consist of lowercase English letters.
'''

## First implementation
from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False
        
        magazine_counts = Counter(magazine)

        for letter_needed in ransomNote:
            if magazine_counts[letter_needed] > 0:
                magazine_counts[letter_needed] -= 1
            else:
                return False

        return True
        
## Second implementation
from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False
        
        ransom_counts = Counter(ransomNote)
        magazine_counts = Counter(magazine)

        for letter in ransom_counts:
            if ransom_counts[letter] > magazine_counts[letter]:
                return False
            
        return True