class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length-1;
        let maxArea = 0;
        while(left < right) {
            const width = right - left;
            const minHeight = Math.min(heights[left], heights[right]);
            const area = minHeight * width;
            maxArea = Math.max(maxArea, area);

            if(heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
