/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function (n) {
  function getNext(n) {
    return (n + "").split("").reduce((a, c) => Number(a) + Number(c * c), 0);
  }

  let slow = n;
  let fast = getNext(n);
  while (fast != 1 && slow != fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast == 1;
};