class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) return 0;
        if(nums.length === 1) return 1;
        const set = new Set(nums);
        let maxLength = 1;

        for (let i=0; i<nums.length; i++) {
            if(set.has(nums[i] - 1)) {
                continue;
            }

            let j = 1;
            while(set.has(nums[i] + j)) {
                j++;
            }

            maxLength = Math.max(maxLength, j);
        }

        return maxLength;
    }
}
