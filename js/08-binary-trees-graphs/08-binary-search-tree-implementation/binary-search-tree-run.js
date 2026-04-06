const { Node, BinarySearchTree } = require("./binary-search-tree");

// Create a binary search tree:
//      9
//    /   \
//   4     11
//  / \      \
// 2   7      15
//    / \
//   5   8

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(11);
bst.insert(2);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(8);

bst.remove(4);

console.log(bst.lookup(2));

// bst.printTree();
