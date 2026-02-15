const Stack = require("./stack");

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedString = "";

  while (!stack.isEmpty) {
    reversedString += stack.pop();
  }

  return reversedString;
}

module.exports = reverseStringStack;
