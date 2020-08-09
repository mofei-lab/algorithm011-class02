/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || !grid[0]) return 0;
    const m = grid[0].length;
    const n = grid.length;
    let count = 0;

    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        const row = grid[rowIndex];
        for (let cellIndex = 0; cellIndex < m; cellIndex++) {
            const cell = row[cellIndex];
            if (cell == 1) {
                count++;
                cleanIsland(rowIndex, cellIndex);
            }
        }
    }
    function cleanIsland(x, y) {
        if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] == 0) return;
        grid[x][y] = '0'
        cleanIsland(x - 1, y);
        cleanIsland(x + 1, y);
        cleanIsland(x, y - 1);
        cleanIsland(x, y + 1);
    }
    return count;
};