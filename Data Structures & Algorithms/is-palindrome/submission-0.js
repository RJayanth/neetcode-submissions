class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 1) return true;
        const formattedStr = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = 0, j = formattedStr.length -1;
        while(i<=j) {
            if(formattedStr[i] === formattedStr[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    }
}
