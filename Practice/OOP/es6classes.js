// Constructor Function
function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  this.getDetails = function () {
    console.log(
      `The ${this.name} is ${this.color} in color. It has ${wheels} wheels`
    );
  };
}

// const car = new Vehicle('car', 'blue',4);
// car.getDetails()

// Class expressions
// const Vehicle = class {
// }


class VehicleCl {
  // Properties
  name;
  color;
  wheels;
  // Constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  // methods
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`
    );
  }
}

//  Instance of a class
const veh1 = new VehicleCl("Scooter", "Grey", 2);
console.log(veh1);
veh1.getDetails()