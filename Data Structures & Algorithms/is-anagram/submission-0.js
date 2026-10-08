class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s?.length !== t?.length) return false;

        const sMap = new Map();
        for(let i = 0; i< s?.length; i++) {
            
            if(sMap.has(s[i])) {
                const currentCharCount = sMap.get(s[i]);
                sMap.set(s[i], currentCharCount+1);
            } else {
                sMap.set(s[i], 1);
            }
        }

        for(let j=0; j<t?.length; j++) {
            if(sMap.has(t[j])) {
                const currentCharCount = sMap.get(t[j]);
                if(currentCharCount === 1) {
                    sMap.delete(t[j]);
                } else {
                    sMap.set(t[j], currentCharCount - 1);
                }
            } else {
                return false;
            }
        }

        return sMap.size === 0;
    }
}
