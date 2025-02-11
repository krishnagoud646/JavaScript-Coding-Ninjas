function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.getDetails = function () {
    console.log(`Title: ${this.title}\n Year: ${this.year}`);
  };
}

// New Keyword

const movie2 = new Movie('Avatar', 2013);
console.log(movie2)
movie2.getDetails()