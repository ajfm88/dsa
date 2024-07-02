class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // This function should accept a value.
  push(val) {
    // Create a new node using the value passed to the function.
    var newNode = new Node(val);
    // If there is no head property on the list, set the head
    // and tail to be the newly created node.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      // Otherwise set the next property on the tail to be the
      // new node and set the tail property on the list to be
      // the newly created node.
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the length by one.
    this.length++;
    // Return the linked list.
    return this;
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")
