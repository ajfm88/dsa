const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  if (!root) return [];

  const result = [];
  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.data);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
