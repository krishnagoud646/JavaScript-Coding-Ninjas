inputs = [11, 23, 44, 66, 87, 90, 67, 57, 82, 93, 64, 46, 57, 28, 92, 88];
const evenNumbers = [];
for (let i of inputs) {
  if (i % 2 !== 0) // it will skips all the odd numbers
    {
    continue;
  }
  evenNumbers.push(i);
  if (evenNumbers.length === 5) {
    break;
  }
//   console.log(evenNumbers);
}
console.log(evenNumbers);
