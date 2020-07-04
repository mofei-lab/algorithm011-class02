/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const results = new Map();
    strs.forEach(str => {
        const key = str.split('').sort().join('');
        const oldVal = results.get(key) || [];
        results.set(key, [...oldVal, str]);
    });
    return [...results.values()]
};