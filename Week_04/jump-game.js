/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxPosition = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maxPosition >= i) {
            maxPosition = Math.max(maxPosition, i + nums[i]);
            if (maxPosition >= nums.length - 1) return true;
        }
    }
    return false;
};
