/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let oldVer = 1;
    let newVer = n;
    let checkVer;
    while (oldVer <= newVer) {
      checkVer = oldVer + Math.floor((newVer - oldVer) / 2);
      if (isBadVersion(checkVer)) {
        if (isBadVersion(checkVer - 1)) newVer = checkVer - 1;
        else return checkVer;
      } else {
        oldVer = checkVer + 1;
      }
    }
  };
};