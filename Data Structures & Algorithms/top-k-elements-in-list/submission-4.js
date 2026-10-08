class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        if(k === nums.length) {
            return nums;
        }
        const m = new Map();
        for(const num of nums) {
           m.set(num, (m.get(num) || 0) + 1);
        }

        return [...m.entries()]
                .sort((a, b) => b[1] - a[1])
                .slice(0, k)
                .map(item => item[0])
    }
}
