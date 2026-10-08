class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s?.length !== t?.length) return false;

        const countArr = new Array(26).fill(0);
        const charCodeA = 'a'.charCodeAt(0);
        for(let i=0; i< s.length; i++) {
            countArr[s.charCodeAt(i) - charCodeA]++;
            countArr[t.charCodeAt(i) - charCodeA]--;
        }

        for(let i=0; i< 26; i++) {
            if(countArr[i] !== 0) {
                return false;
            }
        }
        return true;
    }
}
