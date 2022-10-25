/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    let rich = 0;
    for (i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        rich = Math.max(rich, sum);
    }
    return rich;
};