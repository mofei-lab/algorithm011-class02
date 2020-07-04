/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const val = [];
    root && search(root, 0, val);
    return val;
};

function search(root, level, tar) {
    tar[level] = tar[level] || [];
    tar[level].push(root.val);
    root.children.forEach(item => search(item, level + 1, tar))
}