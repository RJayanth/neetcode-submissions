class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let i =0;
        while(i < s.length) {
            if(s[i] === "[" || s[i] === "{" || s[i] === "(") {
                stack.push(s[i])
            } else {
                switch(s[i]) {
                    case ']': 
                        if(stack[stack.length -1] === '[') {
                            stack.pop();
                            
                            break;  
                        } else return false;

                    case '}': if(stack[stack.length -1] === '{') {
                            stack.pop();
                            
                            break;
                        } else return false;

                    case ')': if(stack[stack.length -1] === '(') {
                            stack.pop();
                            
                            break;
                        } else return false;
                }
            }
            i++;
        }

        return stack.length === 0
    }
}
