const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

myHashTable.set("Alex", "555-234-5432");
myHashTable.set("James", "123-234-5432");
myHashTable.set("Sarah", "993-234-5432");

myHashTable.remove("James");

// console.log(myHashTable.has("James"));
// console.log(myHashTable.has("Alex"));

myHashTable.clear();

myHashTable.printTable();
