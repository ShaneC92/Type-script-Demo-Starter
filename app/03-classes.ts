/*
   Overview:
      Harnessing the power of ES6, we can make custom types in conjuction with Typescript, while also simulating the experience of traditional Object Oriented Programming. Many developers moving from Java, C#, an other OOP languages, often site this as a source of frustration with Javascript: there are no types or classes

      Yes, ES6 did provide classes, but as the MDN docs say, these classes still involve the prototype chain and are just 'syntactic sugar'. They are not classes in the traditional, OOP sense.

      With Typescript, we are more able to build a development environment that highly resembles a classical OOP environment, which allows for type safety and allows for instantiation of custom types/class. Let's see this working.
*/


//1
class Person {
   //2
   firstName: string;
   lastName: string;

   sayHello() {
      console.log('Hello', this.firstName)
   }
}
// 1. Using the class keyword, we create a new class called Person. Just to be clear, this is not part of Typescript, this is part of ES6.
// 2. We create 2 properties with types in that class. Here Typescript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
let kenn: Person = new Person()
kenn.firstName = 'Kenn'
kenn.sayHello()

//3
let phil: Person = new Person();
// 3. We instantiate(create an instance) of the class by setting the type to Person and calling the 'new' keyword to create a new instance of the class.

//4
phil.firstName = 'Phil';
phil.lastName = 'Donahue';
// 4.  Back to the top code. We set the properties on the instance of the Phill property


/*
   *** Instantiation ***

      Instantiation means to create a new instance of a class. Think of the class as the cookie-cutter, and the object as the cookie. The cookie cutter is used over and over t make new cookies, Each cookie might have different property values, but at the end of the day, they are all cookies.
*/

//    1                 2       3     4
let someVariableName: Person = new Person()

/*
   1. We declare a variable with our own custom name
   2. We declare the type. It's a custom type of Person.
   3. We use the 'new' keyword to instantiate a new instance.
   4. We call the class with parents. The parens invoke the constructor function.
*/


/*

   **** Constructors ****

   Purpose: A constructor allows us to more easily and efficiently create an instance of a class by enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.

*/


class Game {
   constructor(name: string, maker: string) {
      this.gameName = name;
      this.gameMaker = maker;
   }
   gameName: string;
   gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

class GameWithoutConstructor {
   gameName: string;
   gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';

/*

   Overview:
      Inheritance is onee of the pillars of object oriented programming, and as of ES6, Javascript allows for inheritance with a quasi-class-based approach.

      Let's consider an app that sells all kinds of vehicles. Consider all of the different types there are: motorcycles, vans, sedans, wagons, helicopters, etc.

      One thing that we need to think about when writing our classes is what properties are univeral to all vehicles and what properties and methods are exclusive to certain types of vehicles.

*/


class Vehicle {
   type: string
   make: string
   manufactureYear: number
   runs: boolean
   topSpeed: number
}

// Here we have what's called a parent class. This holds all the properties that are going to be universal to all vehicles. With inheritance, we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. Here is the syntax for a subclass with two examples:

class Automobile extends Vehicle {
   isSelfDriving: boolean
}
let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo'

class Motorcycle extends Vehicle {
   easyToDoWheelie: boolean
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

/*
   1. The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcyle and Automobile inherit from Vehicle
   2. Note that these properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.
   3. These are properties from the parent class, the Vehicle class. They are inherited properties.
*/

// class Store {
//    constructor(name: string, city: string) {
//       this.name = name;
//       this.city = city;
//    }
//    name: string;
//    city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');
// One of the most elegant augmentations that Typescript has made comes with parameters properties. The pattern above has become quite common over the years, and we can now use Typescript to streamline a lot of the code above in our constructor.

// Refactor:

class Store {
   constructor(public name: string, public city: string) {

   }
}

let ikea: Store = new Store('Ikea', 'Fishers')

/* 
   1. We add a 'public' accessor. We'll talk about this in the next module. For now, know that it's required for this approach.

   2. With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need 'this.name = name'
*/



// *** Accessors ***

/*
   Javascript has public and private accessors, but they are taken care of in the constructor.

   Typscript has brought us more explicit keywords for determining the accessibility of a member using the 'private' and 'public' keywords. In terms of classes, this allows us to keep certain members private to the class for internal use.
*/
//       1
class Employee extends Person {
   // 2        3
   private _salary: number;

   // 5
   getSalary(): string {
      return this._salary.toString();
   }
//          4
   setSalary(newSalary: number) {
      this._salary = newSalary;
   }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0;  <--- this breaks
let salaryResult: string = newEmployee.getSalary();
console.log('The salary is:', salaryResult);

/*
   1. We have a class called Employee that extends 'Person'
   2. We create a private property, denoted by the private keyword
   3. It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention
   4. We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types
   5. We have a method called getSalary that returns a string. Inside the method, we perform some low-level business logic of converting the salary number value to a string in the return statement
*/