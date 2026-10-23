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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let curr = l1;
        let str1 = ""
        while(curr) {
            str1 = `${curr.val}` + str1;
            curr = curr.next;
        }

        curr = l2;
        let str2 = "";
        while(curr) {
            str2 = `${curr.val}` + str2;
            curr = curr.next
        }

        const resultStr = (BigInt(str1) + BigInt(str2)).toString();
        console.log(resultStr);

        l1 = new ListNode(resultStr[resultStr.length - 1]);
        curr = l1;
        let i = resultStr.length - 2;
        while(i >= 0) {
            console.log("Node to insert", resultStr[i])
            const newNode = new ListNode(resultStr[i]);
            curr.next = newNode;
            curr = curr.next;
            i--;
        }

        return l1;

    }
}
