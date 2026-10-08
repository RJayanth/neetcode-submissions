class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const bucket1 = new Set();
            const bucket2 = new Set();
            const bucket3 = new Set();
            const bucket4 = new Set();
            const bucket5 = new Set();
            const bucket6 = new Set();
            const bucket7 = new Set();
            const bucket8 = new Set();
            const bucket9 = new Set();
        for(let i = 0; i< 9; i++) {
            const columnSet = new Set();
            
            const rowSet = new Set();
            for(let j = 0; j<9; j++) {
                const columnNum = board[j][i]
                // column scan for each row
                if(columnSet.has(columnNum)) {
                return false;
                }
                if(columnNum !== ".") {
                    columnSet.add(columnNum);
                }
                
                const num = board[i][j];
                if(num === ".") {
                    continue;
                }
                
                
                
                // // row elements duplicate check logic
                
                if(rowSet.has(num)) {
                    return false;
                }
                rowSet.add(num);

                // 3*3 board logic
                if(i <=2) {
                    if(j<=2) {
                    // bucket1
                        if(bucket1.has(num)){
                            return false;
                        }
                        bucket1.add(num);
                    } else if(j<=5) {
                        //bucket 2
                        if(bucket2.has(num)){
                            return false;
                        }
                        bucket2.add(num);
                    } else {
                        if(bucket3.has(num)){
                            return false;
                        }
                        bucket3.add(num);
                    }
                    
                }

                if(i >=3 && i<=5) {
                    if(j<=2) {
                    // bucket4
                        if(bucket4.has(num)){
                            return false;
                        }
                        bucket4.add(num);
                    } else if(j<=5) {
                        //bucket 5
                        if(bucket5.has(num)){
                            return false;
                        }
                        bucket5.add(num);
                    } else {
                        //bucket 6
                        if(bucket6.has(num)){
                            return false;
                        }
                        bucket6.add(num);
                    }
                    
                }

                if(i >=6 && i<=8) {
                    if(j<=2) {
                    // bucket7
                        if(bucket7.has(num)){
                            return false;
                        }
                        bucket7.add(num);
                    } else if(j<=5) {
                        //bucket 8
                        if(bucket8.has(num)){
                            return false;
                        }
                        bucket8.add(num);
                    } else {
                        //bucket 9
                        if(bucket9.has(num)){
                            return false;
                        }
                        bucket9.add(num);
                    }
                    
                }
                
            }
            
        }

        return true;
    }
}
