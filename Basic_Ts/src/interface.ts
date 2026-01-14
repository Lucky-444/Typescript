// ===============================
// WHAT IS AN INTERFACE?
// ===============================
// An interface is used to define the "shape" of an object.
// It tells TypeScript:
//  - what properties an object should have
//  - their types
//  - what methods are required

// Think of interface as a CONTRACT 📝


// ===============================
// BASIC INTERFACE
// ===============================

interface User {
  id: number;        // must be a number
  name: string;      // must be a string
  isLoggedIn: boolean;
}

// Object following the User interface
const user1: User = {
  id: 1,
  name: "Sashanka",
  isLoggedIn: true
};

// ❌ Error: Property 'isLoggedIn' is missing
// const user2: User = {
//   id: 2,
//   name: "Lucky"
// };


// ===============================
// OPTIONAL PROPERTIES (?)
// ===============================

interface Student {
  rollNo: number;
  name: string;
  age?: number; // optional
}

const s1: Student = {
  rollNo: 101,
  name: "Amit"
};

const s2: Student = {
  rollNo: 102,
  name: "Rahul",
  age: 20
};


// ===============================
// READONLY PROPERTIES
// ===============================

interface Product {
  readonly id: number; // cannot be changed
  name: string;
}

const p1: Product = {
  id: 10,
  name: "Laptop"
};

// ❌ Error: Cannot assign to 'id'
// p1.id = 20;


// ===============================
// FUNCTION INSIDE INTERFACE
// ===============================

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calc.add(5, 3)); // 8


// ===============================
// INTERFACE WITH CLASSES
// ===============================

interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car started 🚗");
  }
}

const car = new Car();
car.start();


// ===============================
// INTERFACE EXTENDING INTERFACE
// ===============================

interface Person {
  name: string;
}

interface Employee extends Person {
  empId: number;
}

const emp: Employee = {
  name: "Sashanka",
  empId: 1234
};


// ===============================
// INTERFACE vs TYPE (INTERVIEW TIP)
// ===============================
// interface:
//  - used mainly for object shapes
//  - can be extended
//  - preferred for large projects & APIs
//
// type:
//  - can represent primitives, unions, tuples
//  - more flexible
