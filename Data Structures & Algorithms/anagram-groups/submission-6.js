class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sMap = new Map();
        
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const count = new Array(26).fill(0);
            
            // Count character frequencies
            for (let j = 0; j < str.length; j++) {
                count[str.charCodeAt(j) - 96]++; // "a".charCodeAt(0) is 97, or use charCodeAt(0)
            }
            
            const key = count.join("#");
            
            // If the key doesn't exist, initialize an empty bucket
            if (!sMap.has(key)) {
                sMap.set(key, []);
            }
            
            // Push directly into the array stored in the map (O(1))
            sMap.get(key).push(str);
        }

        return [...sMap.values()];
    }
}