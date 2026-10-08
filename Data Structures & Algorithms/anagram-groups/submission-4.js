class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sMap = new Map();
        for(let i=0; i< strs.length ; i++) {
            const str = strs[i];
            const count = new Array(26).fill(0);
            for(let j = 0; j< str.length; j++) {
                count[str.charCodeAt(j) - "a".charCodeAt(0)] += 1;
            }
            const key = count.join("#");
            if(!sMap.has(key)) {
                sMap.set(key, [str])
            } else {
                sMap.get(key).push(str);
            }
            
        }

        return [...sMap.values()]
    }
}
