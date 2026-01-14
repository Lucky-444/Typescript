//! Function with parameter types and return type
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("Lucky")); // Hello Lucky
//! void → function does not return anything
function printMessage(message) {
    console.log(message);
}
printMessage("Welcome to TypeScript");
//! Function with Optional Parameters (?)
function introduce(name, age) {
    if (age) {
        return "Name: ".concat(name, ", Age: ").concat(age);
    }
    return "Name: ".concat(name);
}
introduce("Lucky");
introduce("Lucky", 21);
//! Function With Default Parameters
function power(base, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(base, exponent);
}
power(5); // 25
power(5, 3); // 125
//! Arrow Function In TS
var adddd = function (a, b) {
    return a + b;
};
console.log(adddd(10, 20)); // 30
var multiply = function (a, b) {
    return a * b;
};
multiply(4, 5); // 20
// Implementation
function sum(a, b) {
    return a + b;
}
sum(10, 20); // number
sum("Lucky", "Swain"); // string
//! Rest Params
function total() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
total(10, 20, 30, 40); // 100
//! never → function never completes normally
function throwError(message) {
    throw new Error(message);
}
//! Type alias Function
function divadd(n1, n2) {
    return n1 + n2;
}
var combineFunction;
combineFunction = divadd;
console.log(combineFunction(1, 2));
