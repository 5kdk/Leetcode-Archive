/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  s = sentence.split(' ').join('');
  const result = [...s].reduce(function (acc, cur) {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return result.length == 26 ? true : false
};
