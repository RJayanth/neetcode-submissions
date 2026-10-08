class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 1) return true;
        let i =0, j = s.length - 1;
        const nonAlphaNumeric = /[^a-zA-Z0-9]/;
        while(i<j) {
            if(nonAlphaNumeric.test(s[i])) {
                i++;
                continue;
            }
            if(nonAlphaNumeric.test(s[j])) {
                j--;
                continue;
            }
            if(s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
