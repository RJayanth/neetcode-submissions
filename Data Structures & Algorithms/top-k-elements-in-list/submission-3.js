class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums?.length === k) {
            return nums;
        }
        const m = new Map();
        for(const num of nums) {
            m.set(num, (m.get(num) || 0 )+ 1);
        }

        // prepare the bucket array with frequency as indicis.
        const buckets = Array.from({length: nums.length + 1}, () => [])

        for(const [num, freq] of m.entries()) {
            buckets[freq].push(num);
        }

        const results = [];
        for(let i = buckets?.length; i >= 0 && results.length < k; i--) {
            if(buckets[i]?.length) {
                for(const num of buckets[i]) {
                    results.push(num);
                    if(results.length === k) {
                        break;
                    }
                }
            }
        }
        return results;

    }
}
