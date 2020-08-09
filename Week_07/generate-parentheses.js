/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    function loop(str, left, right) {
        if (str.length >= 2 * n) {
            result.push(str)
        } else {
            if (right < left) {
                loop(str + ')', left, right + 1);
            }
            if (left < n) {
                loop(str + '(', left + 1, right);
            }
        }

    }
    loop('', 0, 0);
    return result;
};