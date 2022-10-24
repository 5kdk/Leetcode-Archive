/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    if (nums.length === 1) {
        return nums[0];
    } else {
        nums.sort();
        let cnt = 0;
        if (nums[cnt] !== nums[cnt + 1]) {
            return nums[cnt];
        } else {
            while (cnt < nums.length) {
                if (nums[cnt] === nums[cnt + 1]) {
                    cnt++;
                } else if (nums[cnt] === nums[cnt - 1]) {
                    cnt++;
                } else {
                    return nums[cnt];
                }
            }
        }
    }
};