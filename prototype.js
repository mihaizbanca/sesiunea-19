function Car(name, brand) {
  // this = {}

  this.name = name;
  this.brand = brand;

  // return this
}

Car.prototype.sayHello = function () {
  // ca sa modificam this-ul din Car se foloseste prototype
  console.log("Hello");
};

const car = new Car("Ford", "Mustang");

car.getDescription = function () {
  return `I am a ${this.name} type: ${this.brand}`;
};

// console.log(car.getDescription());
console.log(car);
car.sayHello();

Car.prototype.changeBrand = function (newBrand) {
  this.brand = newBrand;
};

car.changeBrand("Focus");

console.log(car);

Array.prototype.getFirst = function () {
  return this[0];
};

const animals = ["oaie", "capra"];
console.log(animals.getFirst());
