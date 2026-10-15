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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) return list2;
        if(!list2) return list1;
        let l1 = list1;
        let l2 = list2;
        while(l1 !== null) {
            const value = l1.val;
            let prev = null;
            let curr = l2;
            while(curr !== null) {
                if(value <= curr.val) {
                    const newNode = new ListNode(value);
                    if(prev === null) { // beginning node
                        newNode.next = curr;
                        l2 = newNode;
                        break;
                    }
                    prev.next = newNode;
                    newNode.next = curr;
                    break;
                } else {
                    if(curr.next === null) { // end of list, insert
                        const newNode = new ListNode(value);
                        curr.next = newNode;
                        break;
                    }
                }
                // one pending possibility is value is greater & not end of the list, in that case move to next node in list 2
                prev = curr;
                curr = curr.next;
            }

            l1 = l1.next;
        }

        return l2;
    }
}
