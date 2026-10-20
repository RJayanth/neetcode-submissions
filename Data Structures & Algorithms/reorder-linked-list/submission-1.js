/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next || !head.next.next) return head;

        let slow = head, fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let secondHalf = slow.next;
        slow.next = null;

        // reverse secondHalf list
        let curr = secondHalf;
        let prev = null
        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        let first = head, second = prev;
        while(second) {
            let temp1 = first.next;
            let temp2 = second.next;
            second.next = temp1;
            first.next = second;
            
            first = temp1;
            second = temp2;
        }
        return first;
    }
}
