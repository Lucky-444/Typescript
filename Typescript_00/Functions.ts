//! Function with parameter types and return type
function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Lucky")); // Hello Lucky


//! void → function does not return anything
function printMessage(message: string): void {
    console.log(message);
}

printMessage("Welcome to TypeScript");


//! Function with Optional Parameters (?)
function introduce(name: string, age?: number): string {
  if (age) {
    return `Name: ${name}, Age: ${age}`;
  }
  return `Name: ${name}`;
}

introduce("Lucky");
introduce("Lucky", 21);


//! Function With Default Parameters
function power(base: number, exponent: number = 2): number {
    return base ** exponent;
}

power(5);     // 25
power(5, 3);  // 125


//! Arrow Function In TS
const adddd = (a: number, b: number): number => {
    return a + b;
};

console.log(adddd(10, 20)); // 30

//! Function Type Alias
// Function signature using Type Alias
type Calculator = (x: number, y: number) => number;

const multiply: Calculator = (a, b) => {
    return a * b;
};

multiply(4, 5); // 20

//! Function Overloading
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

// Implementation
function sum(a: any, b: any) {
    return a + b;
}

sum(10, 20);           // number
sum("Lucky", "Swain"); // string

//! Rest Params
function total(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

total(10, 20, 30, 40); // 100

//! never → function never completes normally
function throwError(message: string): never {
    throw new Error(message);
}

//! Type alias Function

function divadd(n1 : number , n2 : number){
    return n1 + n2;
}

let combineFunction : Function;

combineFunction = divadd ; 

console.log(combineFunction(1, 2));
//If We assign again combineFunction = another function(which take string as parameters ) then it shows wrong answer to us 
//so it is not a good Practice 


//! Good Practice
function x(n1 : number , n2 : number){
    return n1 + n2;
}
let f : (a : number, b : number) => number ; 
f = x;

console.log(f(123  , 234));

//! function Type And CallBacks
function f2(n1 : number , n2 : number , cb : (res : number) => void){
    const result = n1 + n2;
    cb(result); 
}

//x as a parameter pass to the function f2

f2(19 , 35 , (x) => {
    console.log(x);
})

//[Different Ways]

type CB = (a : number) => void;

function f3(a : number , b : number , cb : CB){
    const res = a + b ; 

    cb(res);
}

f3(1393 ,3273 , (a : number) => {
    console.log("a" , a);
})




