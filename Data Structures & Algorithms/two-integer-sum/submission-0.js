class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        

    if(nums?.length === 2 && nums[0] + nums[1] === target) {
        return [0, 1];
    }
    const seen = new Map();
    for(let i = 0; i< nums.length ; i++) {
        const findEle = target - nums[i];
        if(seen.has(findEle)){
            return [seen.get(findEle), i];
        }
        seen.set(nums[i], i);
    }
    }
}
