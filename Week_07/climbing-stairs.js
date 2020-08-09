/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const caches = {
        0: 0,
        1: 1,
        2: 2
    }

    if (n <= 2) return caches[n];

    function climb(n) {
        if (caches[n]) return caches[n]
        const rst = climb(n - 1) + climb(n - 2);
        caches[n] = rst;
        return rst;
    }
    return climb(n)
};