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

        // find the length
        function findLength(node) {
            let length = 0;
            let curr = head;
            while(curr) {
                length++;
                curr = curr.next;
            }
            return length;
        }

        const len = findLength(head);
        if(len <= 2) return head; // short circuit & return head

        // divide linked list into two halves
        const mid = Math.floor(len / 2);
        let i = 1, firstHalf = head;
        while(i<=mid) {
            firstHalf = firstHalf.next;
            i++;
        }
        let secondHalf = firstHalf.next;
        firstHalf.next = null;

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
        while(first && second) {
            let temp = first.next;
            let secondaryListTemp = second.next;
            second.next = temp;
            first.next = second;
            

            first = first.next.next; // two traversal, as we just linked new node
            second = secondaryListTemp;
            if(second === null) return;
            if(first === null) {
                first.next = second;
                return;
            }
        }
        first.next = second;
        return first;
    }
}
