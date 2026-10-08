class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums?.length) return false;
        const elements = new Map();
        for(let i=0; i < nums.length; i++) {
            if(elements.has(nums[i])) {
                return true;
            } else {
                elements.set(nums[i], i);
            }
        }
        return false;
    }
}
