class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return 1;
        const parent = new Map();
        const size = new Map();
        let maxLength = 1;

        for(const n of nums) {
            if(!parent.has(n)) {
                parent.set(n, n);
                size.set(n, 1);
            }
        }
        

        function find(x) {
            if(parent.get(x) !== x) {
                parent.set(x, find(parent.get(x))) 
            }

            return parent.get(x);
        }

        function union(x, y) {
            const rootX = find(x);
            const rootY = find(y);
            if(rootX !== rootY) {
                parent.set(x, rootY);
                const newSize = size.get(rootX) + size.get(rootY);
                size.set(rootY, newSize);
                maxLength = Math.max(maxLength, newSize);
            }
        }

        for(let i=0; i<nums.length; i++) {
            const nextNum = nums[i] +1;
            if(parent.has(nextNum)) {
                union(nums[i], nextNum);
            }
        }

        return maxLength;
    }
}
