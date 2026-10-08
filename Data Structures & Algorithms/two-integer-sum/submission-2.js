class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const NumsMap = new Map();
        for(let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if(NumsMap.has(diff)) {
                return [i, NumsMap.get(diff)];
            }
            NumsMap.set(nums[i], i);
        }
    }
}
