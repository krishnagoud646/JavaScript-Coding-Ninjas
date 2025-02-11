const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
  getMarks() {
    console.log(this.marks);
  },
};

// Deep Copy

const user2 = JSON.parse(JSON.stringify(user1));

user2.username = "Harry";
user2.marks.maths = 10;
console.log(user2);
console.log(user1);

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = "Harry";
// console.log(user2);
// console.log(user1);

/* Object.assign -- It will also make a shallow copy*/

//   const user2 = Object.assign({}, user1);
//   console.log(user2);
//   console.log(user1);

//   user2.username = "Harry";
//   console.log(user2);
//   console.log(user1);
