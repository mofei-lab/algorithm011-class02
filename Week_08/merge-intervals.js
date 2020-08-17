/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 0) return [];
    const sorted = intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    const overlaps = [intervals[0]];
    let end = intervals[0][1];
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i][0] <= end) {
            end = Math.max(end, sorted[i][1]);
            overlaps[overlaps.length - 1][1] = end;
        } else {
            end = sorted[i][1];
            overlaps.push(sorted[i])
        }
    }
    return overlaps;
};