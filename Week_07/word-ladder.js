/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    let queue = [[beginWord, 0]];
    if (!wordSet.has(endWord)) return 0;

    var charts = 'abcdefghijklmnopqrstuvwxyz'.split('');

    while (queue.length) {
        const target = queue.shift();
        const [word, count] = target;
        if (word === endWord) {
            return count + 1;
        } else {
            for (let i = 0; i < word.length; i++) {
                for (c of charts) {
                    const newWord = word.slice(0, i) + c + word.slice(i + 1);
                    if (count == 1) console.log(i, newWord, wordSet.has(newWord));
                    if (wordSet.has(newWord)) {
                        wordSet.delete(newWord);
                        queue.push([newWord, count + 1])
                    }
                }
            }
        }
    }
    return 0;
};