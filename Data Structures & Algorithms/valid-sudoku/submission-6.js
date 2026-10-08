class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                
                // Skip empty cells
                if (val === ".") continue;

                // Create unique identifiers for row, column, and 3x3 box
                const rowKey = `row${i}-${val}`;
                const colKey = `col${j}-${val}`;
                const boxKey = `box${Math.floor(i / 3)}-${Math.floor(j / 3)}-${val}`;

                // If any of these already exist, the Sudoku is invalid
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }

                // Add them to our seen set
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }

        return true;
    }
}