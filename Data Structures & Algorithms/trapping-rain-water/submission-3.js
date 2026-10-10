class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length <=2) return 0;
        let bars = 0, leftMax = 0, rightMax = 0;
        let left = 0, right = height.length - 1;
        while(left < right) {
            if(height[left] < height[right]) {
                if(height[left] < leftMax) {
                    bars += (leftMax - height[left]);
                } else {
                    leftMax = height[left];
                }
                left++;
            } else {
                if(height[right] < rightMax) {
                    bars += (rightMax - height[right]);
                } else {
                    rightMax = height[right];
                }
                right--;
            }
        }
        return bars;
    }
}
