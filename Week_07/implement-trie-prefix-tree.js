var Trie = function () {
};

Trie.prototype.insert = function (word) {
    if (!word) return false;
    let node = this;
    for (c of word) {
        node.next = node.next || {};
        node.next[c] = node.next[c] || {};
        node = node.next[c];
    }
    node.isEnd = true;
};

Trie.prototype.search = function (word) {
    if (!word) return false;
    let node = this;
    for (c of word) {
        if (!node.next || !node.next[c]) { return false }
        node = node.next[c];
    }
    return !!node.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
    let node = this;
    for (c of prefix) {
        if (!node.next || !node.next[c]) {
            return false;
        }
        node = node.next[c];
    }
    return true
};