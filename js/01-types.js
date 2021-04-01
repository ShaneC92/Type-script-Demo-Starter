//       1          2         3
// let username: string = 'instructor';
// let password: string = 'Letmein1234!';
// let instructorId: number = 5;
/*
   In the above variables we do the following: 1. We declare a variable. 2. We declare the variables type. 3. We initialize the variable with a value of that type.
*/
//We can also just declare a value and type without initialization:
var password;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
//We also have implicit typing, where we don't have to declare a type:
var greeting = 'Hello';
//This will throw an error in the terminal because password is set as a string, but we try to initialize it with a number.
// password = 1234;
// ********** Number **********
//Numbers are one of the most common primitive types and are declared with the number keyword in Typescript
var age = 40;
var currentYear = 2018;
//as the docs note, Typescript also supports ES6 octal literals:
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
// ********** String **********
//Strings are one of the most common primitive types and are declared with the string keyword in Typescript
var companyName;
companyName = 'Eleven Fifty';
//Typescript is a superset of Javascript, so single quotes or double quotes are fine. Consistency is key:
var appName = 'Twitter';
appName = "Instagram";
// ********** Boolean **********
var isLoggedIn = true;
var isGoldLevelUser = true;
// ********** Array **********
// Arrays can be expressed in two different ways:
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 91, 95, 96];
//Although both of these have the same effect, option 1 is much more prevalent. Accessing the array indices works in the way way.
console.log('Student List:', studentList[0]);
// ********** Any **********
//One of the things that many developers like about Typescript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we le the type be decided at compile time, and we can use the "any" type:
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// ********** Void **********
//A void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
function sayHelloToAll() {
    console.log('Hello to all!');
}
// ********** Null and Undefined **********
var undefinedVariable = undefined;
var nullVariable = null;
//There are a few rules to be aware of, and you should read about these types in the official docs. We won't use them much on their own, but they do get used for things like null checks, which we'll discuss later.
// ********** Tuple **********
//Tuple types allow you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to different types. You may want this for a key value pair:
//Declare a tuple type
var usernameAndId;
//Initialize it
usernameAndId = [1, 'kennisreally40']; //ok
//It's important to note that these values must be entered in proper order. This wouldn't work and the compiler will throw an error if you try to write it:
// ****** usernameAndId = ["kenn26", 2]; //Throws the error
// ********** Enum **********
//Enums allow us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saver"] = 1] = "Saver";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
//Like arrays, enums start at 0, but that starting index can be assigned a different number:
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
;
var cardType = CardType[2];
console.log(cardType);
// ********** Union Types **********
//Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type four our variables.
//Consider:
var x;
var y;
//Now, the variables can take on more than one type
x = '1234';
x = 1234;
//Note that these would throw an error. Give it a try
//****  x = true;
//****  y = false;
//# sourceMappingURL=01-types.js.map