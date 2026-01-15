console.log("InterFaces");

//Why we Need INTERFACE 
/**An interface is a contract that defines the shape of an object, including:

Properties

Methods
It does not contain implementation (unlike classes). */

// /Ensures objects have required properties & types
//A class can implement multiple interfaces
// Different objects can follow the same structure
//Defines what a class must do without forcing how

// Define an interface
interface IEmployee {
  name: string;
  salary: number;

  // Method signature with return Type Number
  calculateBonus(): number;
}

// Implement interface in a class
class Developer implements IEmployee {
  constructor(
    public name: string,
    public salary: number,
    private projects: number
  ) {}

  // Implement the method defined in interface
  calculateBonus(): number {
    return this.salary * 0.1 + this.projects * 100;
  }
}

// Using the class
const dev1: IEmployee = new Developer("Sashanka", 50000, 3);
console.log(dev1.name);          // Sashanka
console.log(dev1.calculateBonus()); // 50300


// Function interface
interface MathOperation {
  (a: number, b: number): number;
}

// Implementing the interface
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15

//! Interface does not have implementation
//! A class must define all methods & properties
//! Class can implement more than one interface
// ! Use ? to make a property optional

// interface IEmployee {
//   name: string;
//   salary?: number; // optional
// }
//! An interface in TypeScript defines a contract for objects or classes to follow, ensuring consistency and type safety.


// Type
type TEmployee = {
  name: string;
  salary: number;
};
const dev2: TEmployee = { name: "Lucky", salary: 60000 };

//! Interface is preferred for OOP/class contracts and extendable structures,while type is more flexible for unions, primitives, and tuples.

//! Extending Interface 
// Interface can extend
interface IManager extends IEmployee {
  teamSize: number;
}

// Interface merging
interface IEmployee {
  department: string; // merged automatically
}


// ❌ Type cannot merge
type TEmployee2 = {
  name: string;
};
// type TEmployee2 = { salary: number }; // ❌ Error

