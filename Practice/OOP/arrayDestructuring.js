const fruits = ['Apple', 'Mango', 'Kiwi', 'Berry', 'Banana', 'Lichi'];

// Binding Pattern

// const [a, , k] = fruits;
// console.log(a,k);

const [a,m,...f] = fruits;

console.log(f);
