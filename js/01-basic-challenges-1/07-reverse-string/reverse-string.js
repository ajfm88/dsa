// const reverseString = (str) => str.split("").reverse().join("");

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

module.exports = reverseString;
