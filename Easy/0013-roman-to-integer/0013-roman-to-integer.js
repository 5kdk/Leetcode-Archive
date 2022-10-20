/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman_obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    // 1000 +

    for (i = 0; i < s.length; i++) {
        let num_1 = roman_obj[s[i]];
        let num_2 = roman_obj[s[i + 1]];

        if (num_1 < num_2) {
            result += (num_2 - num_1)
            i++
        } else {
            result += num_1
        }
    }
    return result;
};