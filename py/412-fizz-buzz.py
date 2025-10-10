'''
412. Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 
Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 
Constraints:
1 <= n <= 10^4
'''
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        result = []

        # explicit
        for array_index in range(n):
            fake_i = array_index + 1
            # if divisible by 3 and NOT 5
            if fake_i % 3 == 0 and fake_i % 5 != 0:
                result.append("Fizz")
            # else if divisible by 5 and NOT 3
            elif fake_i % 5 == 0 and fake_i % 3 != 0:
                result.append("Buzz")
            # else if divisible by 3 and 5
            elif fake_i % 3 == 0 and fake_i % 5 == 0:
                result.append("FizzBuzz")
            # else
            else:
                result.append(str(fake_i))
        return result

        # implicit
        for array_index in range(n):
            fake_i = array_index + 1
            # if divisible by 3 and 5
            if fake_i % 3 == 0 and fake_i % 5 == 0:
                result.append("FizzBuzz")
            # else if divisible by 3
            elif fake_i % 3 == 0 and fake_i % 5 != 0:
                result.append("Fizz")
            # else if divisible by 5 and NOT 3
            elif fake_i % 5 == 0 and fake_i % 3 != 0:
                result.append("Buzz")
            # else
            else:
                result.append(str(fake_i))

        return result