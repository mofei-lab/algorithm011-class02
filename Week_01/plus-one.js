/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let overflow = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const val = digits[i] + overflow;
        digits[i] = val % 10;
        if (val <= 9) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};