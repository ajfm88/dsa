const Stack = require("./stack");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
