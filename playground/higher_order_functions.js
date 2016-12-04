// function one (name, location) {
//   console.log(name, location);
// }
//
// function two () {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments)
// }
//
// two('Roy Scheffers', 'Picton, Ontario');
//
// // two.apply(undefined, ['Zorana', 'Chicago']);

var add = (a, b) => a + b;
var square = (a) => a * a;

var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
   console.log('Result is ' + res);
    return res;
  }
};

var addAndLog = callAndLog(add);
console.log( addAndLog(44, -3) );

var squareAndLog = callAndLog(square);
console.log(squareAndLog(3));


// higher order function has 3 properties:
// 1. It is a function
// 2. It takes and executes a function as its one and only argument
// 3. It returns that function
//
// These higher order functions are useful when an app already has a function that needs to remain the same but other parts need a lightly modified version of that. This is where higher order functions come in.
//
// Example structure
// var callAndLog = (func) => {
//   return function () {
//
//   }
// };
