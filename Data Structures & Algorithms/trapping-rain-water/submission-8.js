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
            
            if(height[left] < height[right]) {
                
                bars += (maxLeft - height[left]);
                left++;
            } else {                
                bars += (maxRight - height[right]);            
                right--;
            }
        }
        return bars;
    }
}
