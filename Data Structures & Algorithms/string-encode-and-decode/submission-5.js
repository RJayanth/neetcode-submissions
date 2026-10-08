class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedArray = [];
        for (let i=0; i < strs.length; i++){
            encodedArray[i] = strs[i].length.toString().concat("#", strs[i]);
        }
        let encodedString = encodedArray.join("");
        console.log(encodedString);
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let pos = 0;
    let result = [];
    while(pos < str.length) {
        const hashPos = str.indexOf("#", pos);
        const length = Number(str.substring(pos, hashPos));
        const wordStartIdx = hashPos + 1;
        const word = str.substring(wordStartIdx, wordStartIdx + length);
        result.push(word);
        pos = wordStartIdx + length;
    }
    return result; 
    }
}
