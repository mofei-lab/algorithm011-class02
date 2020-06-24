/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftindex = 0;
    let rightindex = height.length - 1;
    let maxLeft = height[leftindex];
    let maxRight = height[rightindex];
    let water = 0;
    while (leftindex < rightindex) {
        if (height[leftindex] < height[rightindex]) {
            height[leftindex] > maxLeft ? maxLeft = height[leftindex] : water += (maxLeft - height[leftindex]);
            leftindex += 1;
        } else {
            height[rightindex] > maxRight ? maxRight = height[rightindex] : water += (maxRight - height[rightindex]);
            rightindex -= 1;
        }
    }
    return water;
};