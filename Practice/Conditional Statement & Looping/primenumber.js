let num = 8;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % 2 == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime number");
}
