/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let result = [];
    let eachSum = 0;
    for (i = 0; i < nums.length; i++) {
        eachSum += nums[i];
        result.push(eachSum);
    }
    return result;
};