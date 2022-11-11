/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  const total = nums.reduce((acc, num) => acc + num);
  let left = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (left === total - left - nums[idx]) {
      return idx;
    } else {
      left += nums[idx];
    }
  }
  return -1;
};