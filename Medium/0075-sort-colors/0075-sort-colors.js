/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  let start = 0;
  let idx = 0;
  let end = nums.length - 1;

  while (idx <= end) {
    if (nums[idx] === 0) {
      swap(idx, start);
      start++
      idx++
      
    } else if (nums[idx] == 2) {
      swap(idx, end);
      end--

    } else idx++;
  }
};



