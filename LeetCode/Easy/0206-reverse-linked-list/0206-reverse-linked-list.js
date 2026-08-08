/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 0. Initializing variables
    // null   1 -> 2 -> 3
    // ^prev  ^cur
    let prev = null
    let cur = head

    while (cur) {
        // 1. save the next node before we lose it
        // null   1 -> 2 -> 3
        // ^prev  ^cur ^tempNext
        let tempNext = cur.next;

        // 2. reverse the pointer — point current node backwards
        // null <- 1    2 -> 3
        // ^prev   ^cur
        cur.next = prev;


        // 3. move prev forward to current node
        // null <- 1    2 -> 3
        //         ^prev
        //         ^cur
        prev = cur;


        // 4. move cur forward to the next node we saved
        // null <- 1    2 -> 3
        //         ^prev ^cur
        cur = tempNext;
    }

    // prev is now the new head of the reversed list
    return prev;
};