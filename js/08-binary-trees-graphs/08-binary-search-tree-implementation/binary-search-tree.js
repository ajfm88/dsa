class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // Case 1: Node with no child or only one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        // Case 2: Node with two children
        // Find the smallest value in the right subtree (successor)
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        // Case 3: Node is the root node
        // Replace the node's value with the successor's value
        node.value = tempNode.value;

        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
    };

    // Start at the root
    this.root = removeNode(this.root, value);
  }

  printTree() {
    const printNode = (node) => {
      if (node === null) {
        return;
      }
      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };
    printNode(this.root);
  }
}

module.exports = { Node, BinarySearchTree };
