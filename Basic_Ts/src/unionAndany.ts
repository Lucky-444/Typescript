// Union type: subs can be a number OR a string
let subs: number | string = 10;
subs = "1M";  // ✅ valid because string is allowed

// String literal union type (duplicate 'pending' removed)
let apiRequest: 'pending' | 'success' | 'error' = 'pending';

// apiRequest = 'done'; 
// ❌ Error: 'done' is not part of the allowed literal values


// Airline seat can ONLY be one of these exact strings
let airLineSeats: "aisle" | "window" | "middle" = "aisle";

// ❌ Error: window is treated as a variable, not a string
// airLineSeats = window;

// ✅ Correct: must assign one of the literal strings
airLineSeats = "window";


// Array of string orders
const orders = ['12', '20', '28', '41'];

// ❗ Without type annotation, TypeScript infers `any`
// Better to specify the type explicitly
let currentOrder: string | undefined;

// for...of loop to iterate over array values
for (let order of orders) {
  // Check if the order matches
  if (order === '28') {
    currentOrder = order; // ✅ type-safe
    break;
  }
}
