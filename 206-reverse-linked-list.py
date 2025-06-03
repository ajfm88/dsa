'''
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

'''
Coding iteratively (Neetcode):
shift prev node to curr
shift curr node to the next node

Null -> 1 -> 2 -> 3 ->
  |     |    |
Prev   Curr  |
       Prev Curr
'''
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        # T O(n) M O(1)
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev
    
'''
Jay vs Leetcode solution
'''
# A simple implementation of a linked list node:
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# For testing purposes:
def print_list(head):
    current_node = head

    while current_node:
        print(current_node.val)
        current_node = current_node.next


# Actual solution to Leetcode problem:
def reverse_list(head):
    a = None
    b = head

    while b:
        c = b.next
        b.next = a
        a = b
        b = c

    return a


# Testing
n5 = ListNode("e")
n4 = ListNode("d", n5)
n3 = ListNode("c", n4)
n2 = ListNode("b", n3)
n1 = ListNode("a", n2)

print("Before reversal:")
print_list(n1)

reverse_list(n1)

print("After reversal:")
print_list(n5)