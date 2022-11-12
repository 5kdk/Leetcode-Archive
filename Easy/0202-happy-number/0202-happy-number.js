/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const previouslySeenSum = new Set();

  while (n !== 1) {
    let currentSum = 0;
    while (n > 0) {
      currentSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (!previouslySeenSum.has(currentSum)) {
      previouslySeenSum.add(currentSum);
      n = currentSum;
    } else {
      return false;
    }
  }
  return true;
};
