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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        // find length
        let length = 0;
        let node = head;
        while(node) {
            length++;
            node = node.next;
        }
        const idxToBeDeleted = length - n;
        if(length === 1 && idxToBeDeleted === 0) return null;

        if(idxToBeDeleted === 0) {
            if(length === 1) return null;
            return head.next;
        }
        let i = 0;
        let curr = head;
        let prev = null;
        while(i < idxToBeDeleted) {
            i++;
            prev = curr;
            curr = curr.next;
        }
        
        const next = curr.next;
        prev.next = next;
        return head;
    }
}
