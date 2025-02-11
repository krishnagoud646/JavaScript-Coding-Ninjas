const inputs = [22, 13, 15, 73, 65, 76, 44, 45, 55, 65];

const find1 = inputs.find((num)=> num == 65);
console.log(find1);

const find2 = inputs.findIndex((num) => num == 65);
console.log(find2);

// Other Functions are every, fill, findLast, findLastIndex, forEach