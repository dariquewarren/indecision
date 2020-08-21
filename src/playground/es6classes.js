/*
class = car
propertie = vin#, make, model
methods = getdescription()

*/
// setup constructor to take name and age. set age to 0
// setup nw ,method getDescription --> name is age years old
class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `hi i am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.major) {
      description += `. Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "Nowheresville, Ether") {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let place = super.getGreeting();
    if (this.homeLocation) {
      place += `. I am visiting from ${this.homeLocation}`;
    }
    return place;
  }
}
// traveler
// - extends person class
// add support for homelocation
// override getgreeting
// 1. hi am darique. im visiting from harle,
// 2. hi i am darique
//
const me = new Traveler("darique", 32, "Harlem, NYC");
console.log(me);
// console.log(me.hasMajor())
console.log(me.getGreeting());
const other = new Traveler();
console.log(other);
console.log(other.getGreeting());
// console.log(other.getDescription())
