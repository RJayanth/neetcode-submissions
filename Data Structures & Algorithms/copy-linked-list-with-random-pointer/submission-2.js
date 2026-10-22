// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {

    
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let curr = head;
        const headMap = new Map();
        headMap.set(null, null);
        while(curr) {
            headMap.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while(curr) {
            const copy = headMap.get(curr);
            copy.next = headMap.get(curr.next);
            copy.random = headMap.get(curr.random);
            curr = curr.next;
        }

        return headMap.get(head);
    }
}
