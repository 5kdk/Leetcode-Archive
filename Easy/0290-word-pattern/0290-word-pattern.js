/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (sArr.length !== pattern.length) return false;
  
  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (
      (pMap.has(pattern[i]) && pMap.get(pattern[i]) !== sArr[i]) ||
      (sMap.has(sArr[i]) && sMap.get(sArr[i]) !== pattern[i])
    ) {
      return false;
    }
    pMap.set(pattern[i], sArr[i]);
    sMap.set(sArr[i], pattern[i]);
  }
  return true;
};

