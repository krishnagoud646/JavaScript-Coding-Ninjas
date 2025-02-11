const inputs = [2, 5, 7, 8, 9, 12, 20];

function operation(input, fn) {
  const output = [];
  for (let num of input) {
    output.push(fn(num));
  }
  return output;
}

function square(number) {
  return number * number;
}

function cube(number) {
    return number * number *number;
  }

console.log(operation(inputs, square));
console.log(operation(inputs, cube));