/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n > 5000) return 1;

  const memo = new Map();

  const prob = (a, b) => {
    const key = a + ',' + b;
    
    if (memo.has(key)) return memo.get(key);
    if (a === 0 && b !== 0) return 1;
    if (a === 0 && b === 0) return 0.5;
    if (a !== 0 && b === 0) return 0;

    let p = prob(100 > a ? 0 : (a - 100), b) +
      prob(75 > a ? 0 : (a - 75), 25 > b ? 0 : (b - 25)) +
      prob(50 > a ? 0 : (a - 50), 50 > b ? 0 : (b - 50)) +
      prob(25 > a ? 0 : (a - 25), 75 > b ? 0 : (b - 75));

    p *= 0.25;
    memo.set(key, p);

    return p;
  }
  return prob(n, n);
};