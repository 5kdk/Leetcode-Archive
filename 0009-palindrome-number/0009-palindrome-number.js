/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0){
    return false;
    } else {
        let x_reverse =  x.toString().split("").reverse().join("");
        return x === Number(x_reverse);
    }
};