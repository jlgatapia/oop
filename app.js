// OOP = Object Oriented Programming
//----------------------------------

// Object Literals
var bob = {
  name: "Bob",
  location: "Houston"
}

var ed = {
  name: "Ed",
  location: "Dallas"
}

// Dot notation
bob.name
bob.location

// Bracket notation
bob["name"]
bob["location"]


// Factory 
function makePerson(name, location) {
  var person = {};
  person.name = name;
  person.location = location;
  person.sayHi = function() {
    return "Hi, my name is " + this.name;
  }
  return person;
}

var joe = makePerson("Joe", "Chicago")

joe.sayHi();


// Constructor (with Closure)
var Person = function(name, location, age) {
  this.name = name;
  this.location = location;
  this.getAge = function() {
    return age;
  };
  this.getOlder = function() {
    return ++age;
  }
}

// Adding Methods (Functions) to Class Prototype
Person.prototype.sayHi = function() {
  return "Hi, my name is " + this.name;
}

Person.prototype.curse = function(name) {
  return "Go fuck yourself " + name + "!";
}

// Instantiating Objects
var kevin = new Person("Kevin", "Portland");

var patrick = new Person("Patrick", "Alameda");

// Overriding Methods
patrick.curse = function(name) {
  return "Gosh you are a meanie " + name + "!";
}

// Prototypical Inheritance
var Doctor = function(specialty, name, location) {
  Person.call(this, name, location);
  this.specialty = specialty;   
} 

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  return "You have six months to live. Please pay the receptionist."
}

var ginny = new Doctor("Plastic Surgery", "Ginny", "Omaha");
