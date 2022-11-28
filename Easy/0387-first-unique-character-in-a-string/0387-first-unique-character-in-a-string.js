/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

  const obj = [...s].reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++
    } else {
      acc[curr] = 1;
    }
    return acc
  }, {})

  const unique = Object.keys(obj).find(key => obj[key] === 1);
  
  return unique === undefined ? -1 : s.indexOf(unique);
};