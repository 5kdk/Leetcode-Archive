/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (!candidates || candidates.length == 0) return [];
  let res = [];
  candidates.sort((a, b) => a - b);
  const dfs = function (curSum, cur, idx) {
    if (curSum == target) {
      res.push([...cur]);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (i != idx && candidates[i] == candidates[i - 1]) continue;
      if (curSum > target) return;
      cur.push(candidates[i]);
      dfs(curSum + candidates[i], cur, i + 1);
      cur.pop();
    }
  };
  dfs(0, [], 0);
  return res;
};