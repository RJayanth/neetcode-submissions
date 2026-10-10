class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0, bars = 0;
        while(left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if(leftMax <= rightMax) {
                bars += (leftMax - height[left]);
                left++;
            } else {
                bars += (rightMax - height[right]);
                right--;
            }
        }
        return bars;
    }
}
