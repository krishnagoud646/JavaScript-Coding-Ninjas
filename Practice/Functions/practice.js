function greet(name, callback) {
  const message = "Hello, " + name + "!";
  callback(message); //passing a function from greet function
}
function displayMessage(message) {
  console.log(message);
}
greet("John", displayMessage); // Output: Hello, John!

// Fill Function
console.log("*****Fill Function*******");

const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // Outputs: [1, 2, 0, 0, 5]

// For Each Function

console.log("*****For Each Function*******");
const for_eac_numbers = [1, 2, 3];
for_eac_numbers.forEach(function (number) {
  console.log(number * 2);
});

// Function currying
console.log("*****Function currying*******");

function multiply(a, b) {
  return a * b;
}
function curriedMultiply(a) {
  return function (b) {
    return multiply(a, b);
  };
}
const multiplyByTwo = curriedMultiply(2);
console.log(multiplyByTwo(5)); // Output: 10
const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree(5)); // Output: 15
