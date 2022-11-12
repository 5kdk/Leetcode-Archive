/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function (n) {
  const previousSum = new Set();

  while (n !== 1) {
    let currentSum = 0;
    while (n > 0) {
      currentSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (!previousSum.has(currentSum)) {
      previousSum.add(currentSum);
      n = currentSum;
    } else {
      return false;
    }
  }
  return true;
};