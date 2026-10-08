class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        // Step 1: Accumulate products moving from left to right
        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
        }

        // Step 2: Accumulate products moving from right to left
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
        }
        return result;
    }
}
