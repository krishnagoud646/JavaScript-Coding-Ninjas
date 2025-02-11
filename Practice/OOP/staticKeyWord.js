// Static
class Vehicle {
  static vName = "Static Name";
  // Constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  // methods
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color.It has ${this.wheels} wheels`
    );
  }
  //   Static Method
  static showMsg() {
    console.log("This is the Static Method of the class");
  }
}

const v1 = new Vehicle("car", "blue", 4);
console.log(v1);
v1.getDetails();
Vehicle.showMsg();
console.log(Vehicle.vName);
