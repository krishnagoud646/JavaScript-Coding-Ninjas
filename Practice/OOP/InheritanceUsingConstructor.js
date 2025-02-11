// Constructor function for a generic Vehicle
function Vehicle(name, color, wheels) {
  this.name = name;     // Assign the name of the vehicle
  this.color = color;   // Assign the color of the vehicle
  this.wheels = wheels; // Assign the number of wheels the vehicle has
}

// Adding a method to Vehicle's prototype to display vehicle details
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );
};

// Constructor function for a specific type of Vehicle: Car
function Car(color, brand, seats) {
  // Call the Vehicle constructor, assigning 'car', 'Blue', and 4 to name, color, and wheels respectively.
  // This is effectively overriding the default values using 'call'.
  Vehicle.call(this, 'car', 'Blue', 4);
  
  this.brand = brand;  // Assign the brand of the car
  this.seats = seats;  // Assign the number of seats in the car
}

// Setting Car's prototype to an object that inherits from Vehicle's prototype
Car.prototype = Object.create(Vehicle.prototype);

// Adding a new method to Car's prototype to display car-specific details
Car.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name} is of ${this.brand} company.
      It has seating for ${this.seats} people`);
};

// Creating an instance of Car with color 'Black', brand 'Audi', and seating for 5 people
const car1 = new Car('Black', 'Audi', 5);

// Call the getDetails method of Car to print details specific to the Car
car1.getDetails();

// Logging the entire car1 object to see its properties
console.log(car1);

// Logging the prototype chain to inspect inheritance
console.log(car1.__proto__);

// Call the inherited getVehDetails method from Vehicle to print vehicle details
car1.getVehDetails();
