/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
    const cache = this.cache;
    if (cache.has(key)) {
        const tmp = cache.get(key);
        cache.delete(key);
        cache.set(key, tmp);
        return tmp;
    } else {
        return -1;
    }
};

LRUCache.prototype.put = function (key, value) {
    const cache = this.cache;
    if (cache.has(key)) {
        cache.delete(key)
    } else {
        if (cache.size === this.capacity) {
            cache.delete(cache.keys().next().value);
        }
    }
    cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */