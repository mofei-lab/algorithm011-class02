/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    let arr = [1];
    for (let i = 1; i < n; i++) {
        const minVal = Math.min(arr[index2] * 2, arr[index3] * 3, arr[index5] * 5);
        arr[i] = minVal;
        if (arr[index2] * 2 === minVal) index2++;
        if (arr[index3] * 3 === minVal) index3++;
        if (arr[index5] * 5 === minVal) index5++;
    }

    return arr[n - 1]

};