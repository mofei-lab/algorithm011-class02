/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let row of matrix) {
        if (row[0] <= target && row[row.length - 1] >= target) {
            // target in this row
            let left = 0;
            let right = row.length - 1;
            while (left <= right) {
                const mid = left + Math.floor((right - left) / 2);
                if (row[mid] === target) return true;
                if (row[mid] >= target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        if (row[0] > target) return false;
    };
    return false;
};