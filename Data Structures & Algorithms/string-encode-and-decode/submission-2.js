class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "";
        const res = [];
        for(let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const encodedStrArr = [];
            if(str.length === 0) {
                encodedStrArr.push(257); // no ASCII code, but this will be treated as key for empty string.
            }
            for(let j = 0; j< str.length; j++){
                encodedStrArr.push(str.charCodeAt(j));
            }
            const encodedStr = encodedStrArr.join("#");
            res.push(encodedStr);
        }
        return res.join("$");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        const res = [];
        const strs = str.split("$");
        for(let i = 0; i<strs.length; i++) {
            const str = strs[i];
            const encodedCharsArr = str.split('#');
            const decodedCharsArr = [];
            for(let j = 0; j< encodedCharsArr.length; j++) {
                let decodedStr = "";
                if(encodedCharsArr[j] !== "257") {
                    decodedStr = String.fromCharCode(encodedCharsArr[j]);
                }
                // if(encodedCharsArr[j] === 257) { // empty string code, push empty string.
                //     decodedCharsArr.push("");
                // }
                decodedCharsArr.push(decodedStr);
            }
            res.push(decodedCharsArr.join(""));
        }
        return res;
    }
}
