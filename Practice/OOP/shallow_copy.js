const user1 = {
  username: "Sara",
  age: 12,
};

// Deep Copy and Shallow copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = "Harry";
// console.log(user2);
// console.log(user1);

/* Object.assign -- It will also make a shallow copy*/

const user2 = Object.assign({}, user1);
console.log(user2);
console.log(user1);

user2.username = "Harry";
console.log(user2);
console.log(user1);