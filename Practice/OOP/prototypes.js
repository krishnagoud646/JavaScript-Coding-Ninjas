function Movie(title) {
  this.title = title;
}

const movie1 = new Movie("The Avengers");

movie1.year = 2022;
console.log(movie1);
console.log(movie1.__proto__);
console.log(movie1.__proto__ === Movie.prototype);
console.log(Movie.prototype);



const movie2 = new Movie('Avatar');
console.log(movie2);
console.log(movie2.__proto__.__proto__ === Object.prototype);
console.log(movie2.__proto__.__proto__);



// console.log(Object)