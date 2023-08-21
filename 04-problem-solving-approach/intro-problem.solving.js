// Algorithm
// A process or set of steps to accomplish a certain task

// How to solve problems
// 1. Devise a plan for solving problems.
// 2. Master common problem solving patterns.

// Step 1: Understand The Problem.

// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

// 1. Can I restate the problem in my own words?
// Implement addition
// 2. What are the inputs that go into the problem?
// ints? floats? what about string for large numbers?
// 3. What aer the outputs that should come from the solution to the problem?
// ints? floats? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

// Step 2: Concrete Examples.
// Start with simple examples
// Progress to more complex examples
// Explore examples with empty or invalid inputs

// Write a function which takes in a string, and returns counts of each character in the string.
//
// Start with simple examples
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:2}

// Progress to more complex examples
("my phone number is 340598345");
("Hello hi");

// Explore examples with empty inputs
charCount("");
// Explore examples with invalid inputs
charCount(546546);
charCount({ obj: val });

// Step 3: Break It Down.
// Explicitly write out the steps you need to take. This forces you to think about the code before you write it.

function charCount(str) {
  // do somnething
  // return object with keys, alphanumeric characteres
}

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it and set value to 1
    else {
      result[char] = 1;
    }
  }

  // if char is something else (space, period, etc.) dont do anything
  // return object at end
  return result;
}

// Section 04: Problem Solving Approach:
// Solve the problem. If you can't, solve a simpler one.
