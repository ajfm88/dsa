const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);
list.add(400);

list.insertAt(3, "a");
list.removeFrom(1);

// console.log(list.get(2));
// console.log(list.get(0));
list.printAll();
