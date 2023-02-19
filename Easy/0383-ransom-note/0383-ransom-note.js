/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hashmap = {}
    
    for(let text of magazine) {
        !hashmap[text] ? hashmap[text] = 1 : hashmap[text]++
    }
    
    for(let text of ransomNote) {
        if(!hashmap[text]) {
            return false
        } else { 
            hashmap[text]--
        }
    }    
    
    return true;
};