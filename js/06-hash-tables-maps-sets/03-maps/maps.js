const nameMap = new Map([
  [1, "Alex"],
  [2, "Jack"],
  [3, "Zidane"],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ["name", "Alex"],
  [1, "number one"],
  [true, "really true"],
  [null, "null"],
  [myFunction, "my function"],
  [myObj, "my object"],
]);

// Get values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunction));
// console.log(map2.get(myObj));

// Set values
nameMap.set(4, "Mike");
nameMap.set(5, "Sarah");

console.log(nameMap);

// Check values
console.log(nameMap.has(1));
console.log(nameMap.has(10));

// Remove values
nameMap.delete(1);
console.log(nameMap.has(1));

// Get size
console.log(nameMap.size);

// Iterating (for...of)
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// Using forEach
nameMap.forEach((value, key) => {
  console.log(key, value);
});

// Get keys
console.log(nameMap.keys());

// Get values
console.log(nameMap.values());

// Clear map
nameMap.clear();

console.log(nameMap.size);
