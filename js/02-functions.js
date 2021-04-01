// JS basics review
// Rember that in plain Javascript there is a lot of flexibility in function arguments. Consider the following playin Javascript code:
function demoFunction(someNum) {
    return someNum;
}
;
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
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//Works
addNumbers(1, 2);
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
function sayHello(name) {
    return name;
}
sayHello('Kenn');
// sayHello(1); Errors out
// ********** Optionals **********
// Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if needed. Optionals are declared using a question mark after them.
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
;
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional');
// Optional params must go after all required paramaters!!
//# sourceMappingURL=02-functions.js.map