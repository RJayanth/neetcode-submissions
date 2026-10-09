class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length === 3) {
            if(nums[0] + nums[1] + nums [2] === 0){
                return [nums];
            } else return [];
        }
        const resultMap = new Map();
        for(let i=0; i< nums?.sort((a,b) => a-b).length; i++) {
            let j = i+1, k = nums.length -1;
            while(j<k) {
                const currSum = nums[j] + nums[k];
                const target = -(nums[i]);
                if(currSum === target) {
                    const val = [nums[i], nums[j], nums[k]];
                    const key = val.sort((a,b) => a-b).join("#");
                    if(!resultMap?.has(key)){
                        resultMap.set(key, val);
                        j++;
                    }
                }
                if(currSum < target) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return [...resultMap.values()];
    }
}
