// JS basics review
// Rember that in plain Javascript there is a lot of flexibility in function arguments. Consider the following playin Javascript code:

function demoFunction(someNum) {
   return someNum;
};

demoFunction(1); //1
demoFunction('Stuff'); //2
// demoFunction(1, 'Stuff'); //3

/*
   Remember in the Javascript function that the following things are true:
      1. We can call the function with a number as the argument.
      2. We can call the function with a string as an argument.
      3. We can add arguments that weren't originally declared.
   
   The freedom is loved by some and despised by others. Typescript helps us solve this issue by providing some possibilites for constraints
*/

// Type safety in arguments

// Typescript allows us to bring types to our parameters and limits to the number of arguments we pass in.

function addNumbers(numOne: number, numTwo: number) {
   return numOne + numTwo;
}
//Works
addNumbers(1, 2)
//Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, 'Food);

// Typescript now brings type safety to our parameters. It also keeps us from adding unneeded arguments to our functions.

/*
   Let's refactor this code into typescript

      function hello(greetingString) {
         return greetingString;
      }
   foo(1);
*/

function sayHello(name: string) : string {
   return name;
}

sayHello('Kenn')
// sayHello(1); Errors out



// ********** Optionals **********

// Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if needed. Optionals are declared using a question mark after them.

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
   console.log(someString);
   return numOne + numTwo;
};

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional');

// Optional params must go after all required paramaters!!

// ****** Practice Function 2.06 ******
function myPass(username: string, password: string): boolean {
   if(username === "elevenfiftyuser" && password === "Letmein1234!") {
      console.log('True')
      return true
   } else {
      console.log('False')
      return false
   }
}

myPass('elevenfiftyuser', 'Letmein123'); // false
myPass('elevenfiftyuser', 'Letmein1234!'); // true


function myPass2(username: string, password: string): boolean {
   if(username === 'test1' && password === 'password') {
      console.log('True')
      return true
   } else if (username !== 'test1' && password !== 'password') {
      console.log('Both are False')
      return false
   } else if (username !== 'test1') {
      console.log('Username False')
      return false
   } else if (password !== 'password'){
      console.log("Password False")
      return false
   } else {
      console.log("How'd we get here")
      return true
   }
}

myPass2('test1', 'password'); // true Signed in
myPass2('test2', 'password'); // false Username false
myPass2('test2', 'notcorrect'); // false Both are false
myPass2('test1', 'password22') // false Password false