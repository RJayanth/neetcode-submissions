class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(numbers.length === 2) return [1,2];
        let left = 0, right = numbers.length-1;
        while(left < right) {
            const sum = numbers[left] + numbers[right];
            if(sum === target) return [left+1, right+1];
            if(sum > target) {
                right--;
            } else left++;
        }
    }
}
