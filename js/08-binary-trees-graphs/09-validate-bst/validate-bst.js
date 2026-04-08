class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root, min = null, max = null) {
  if (!root) {
    return true;
  }

  if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
    return false;
  }

  return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

module.exports = { Node, isValidBST };
