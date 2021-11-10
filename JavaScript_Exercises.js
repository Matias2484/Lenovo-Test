//1) Create a function that receives an array of positive integers and returns an array with only the
//input’s pair numbers.

function pairNumbers(array) {
  var pairs = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pairs.push(array[i]);
    }
  }
  return pairs;
}

//2) Create a function that receives a String as parameter and returns a Boolean value indicating if
//the word is a palindrome* or not.

function palindrome(string) {
  let reverseString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  if (reverseString === string) {
    return true;
  } else return false;
}

//3) Using any JavaScript object creation pattern, create a Car object with the following attributes
//and methods:

class Car {
  constructor(
    make = String,
    model = String,
    turnedOn = Boolean,
    engineDisplacement = Number,
    year = Number
  ) {
    this.make = make;
    this.model = model;
    this.turnedOn = turnedOn;
    this.engineDisplacement = engineDisplacement;
    this.year = year;
  }
  isOn() {
    return this.turnedOn;
  }
  turnOn() {
    return (this.turnedOn = true);
  }
  turnOff() {
    return this, (this.turnedOn = false);
  }
  toString() {
    return [this.year, this.make, this.model, this.engineDisplacement];
  }
  getMarketingData() {
    return [this.make, this.model, this.year];
  }
}

//4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes
//and no methods. Instantiate it and print to the console its internal state calling the
//getMarketingData method from the Car object.

class Bicycle extends Car {
  constructor(make = String, model = String, year = Number) {
    super();
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

console.log(Bicycle.prototype.getMarketingData(["1985", "boludo", 1743]));
