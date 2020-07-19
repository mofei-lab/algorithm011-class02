/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        if (g[num] <= s[i]) {
            num++;
        }
    }
    return num;
};