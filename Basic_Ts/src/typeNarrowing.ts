// Function with union type and type narrowing
function getLucky(kind : string | number)
{

         // Type narrowing using typeof
         if (typeof kind === "string")
         {
                  // Here TypeScript knows `kind` is a string
                  return `making ${kind} chai...`;
         }

         // Here `kind` is a number
         return `Coder $ { kind }
         `;
}

// ✅ Function calls
getLucky("masala"); // "making masala chai..."
getLucky(7);        // "Coder 7"

// --------------------------------------------

// Optional parameter function
function serveChai(msg ?: string)
{

         // If msg is provided
         if (msg)
         {
                  return `Serving ${msg}`;
         }

         // Default case when msg is undefined
         return `Serving default masala chai`;
}

// ✅ Function calls
serveChai("ginger chai"); // "Serving ginger chai"
serveChai();              // "Serving default masala chai"

// --------------------------------------------

// Function with string literal unions + number
function orderChild(size : "small" | "medium" | "large" | number)
{

         if (size === "small")
         {
                  return `Small cutting chai`;
         }

         if (size === "medium" || size === "large")
         {
                  return `Make extra chai`;
         }

         // When size is a number
         return `Chai order ${size}`;

}

// ✅ Function calls
orderChild("small");  // "Small cutting chai"
orderChild("medium"); // "Make extra chai"
orderChild("large");  // "Make extra chai"
orderChild(5);        // "Chai order 5"


// Class A definition
class A {
  solve() {
    return `Inside Class A`;
  }
}

// Class B definition
class B {
  solve() {
    return `Inside Class B`;
  }
}

// Function that accepts either an object of class A or class B
function solve(name: A | B) {

  // Type narrowing using instanceof
  if (name instanceof A) {
    // Here TypeScript knows `name` is of type A
    return name.solve();
  } else {
    // Here TypeScript knows `name` is of type B
    return name.solve();
  }
}

// --------------------------------------------
// Function calls (examples)

// Creating instances of both classes
const objA = new A();
const objB = new B();

// Calling solve() with class A instance
solve(objA); // Output: "Inside Class A"

// Calling solve() with class B instance
solve(objB); // Output: "Inside Class B"






