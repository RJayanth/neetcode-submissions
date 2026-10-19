class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let bars = 0;
        let left = 0, right = height.length - 1;
        let maxLeft = 0, maxRight = 0;
        while(left < right) {
            maxLeft = Math.max(maxLeft, height[left]);
            maxRight = Math.max(maxRight, height[right]);
            const surrounding = Math.min(maxLeft, maxRight);
            
            if(height[left] < height[right]) {
                if(height[left] < surrounding) {
                    bars += (surrounding - height[left]);
                }
                left++;
            } else {
                if(height[right] < surrounding) {
                    bars += (surrounding - height[right]);
                }
                right--;
            }
        }
        return bars;
    }
}
