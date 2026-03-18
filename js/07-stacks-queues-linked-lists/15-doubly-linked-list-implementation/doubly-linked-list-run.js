const DoublyLinkedList = require("./doubly-linked-list");

const list = new DoublyLinkedList();

list.append(200);
list.append(300);
list.append(400);

list.prepend(100);

list.insertAt(2, "NEW");

//console.log(list.get(2).data);

list.remove(2);
list.remove(3);

console.log(list.contains(200));
console.log(list.contains(500));

// list.printAll();
