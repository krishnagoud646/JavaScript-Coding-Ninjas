/** JS Higher Order Functions */

// map()

const inputs = [2,4,6,8,7];

// const squaredArray = inputs.map(function(currentElement){
//     return currentElement * currentElement;
// });

const squaredArray = inputs.map((num) => num * num);

console.log(squaredArray);

// let data = [2,4,5,7];
// let newData = data.map();
// console.log(newData);


