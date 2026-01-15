"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Function with parameter types and return type
function greet(name) {
    return `Hello ${name}`;
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
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}
introduce("Lucky");
introduce("Lucky", 21);
//! Function With Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
power(5); // 25
power(5, 3); // 125
//! Arrow Function In TS
const adddd = (a, b) => {
    return a + b;
};
console.log(adddd(10, 20)); // 30
const multiply = (a, b) => {
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
function total(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
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
let combineFunction;
combineFunction = divadd;
console.log(combineFunction(1, 2));
//If We assign again combineFunction = another function(which take string as parameters ) then it shows wrong answer to us 
//so it is not a good Practice 
//! Good Practice
function x(n1, n2) {
    return n1 + n2;
}
let f;
f = x;
console.log(f(123, 234));
//! function Type And CallBacks
function f2(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//x as a parameter pass to the function f2
f2(19, 35, (x) => {
    console.log(x);
});
function f3(a, b, cb) {
    const res = a + b;
    cb(res);
}
f3(1393, 3273, (a) => {
    console.log("a", a);
});
//# sourceMappingURL=Functions.js.map