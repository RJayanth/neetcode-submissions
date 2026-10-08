class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                const val = board[i][j];
                if(val === ".") {
                    continue;
                }
                const rowKey = `row${i}-${val}`;
                const colKey = `col${j}-${val}`;
                const boxKey = `box${Math.floor(i/3)}-${Math.floor(j/3)}-${val}`;
                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
