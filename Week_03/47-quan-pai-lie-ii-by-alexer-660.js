/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let hash = {};
    let backtrack = (tmpPath) => {
        if(tmpPath.length == n && JSON.stringify(res).indexOf(JSON.stringify(tmpPath)) == -1){
            res.push(tmpPath);
            return;
        }
        for(let i = 0;i < n;i++){
            if(!hash[i+'-'+nums[i]]){
                hash[i+'-'+nums[i]] = true;
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                hash[i+'-'+nums[i]] = false;
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return res;
};