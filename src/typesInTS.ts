// TypeScript infers `drink` as a string because the value is "chai"
let drink = "chai";

// ❌ Error: Type 'number' is not assignable to type 'string'
// drink = 4;


// Ternary expression returns either number or string
// So TypeScript infers the type as: number | string
let cups = Math.random() > 0.5 ? 10 : '5';


// TypeScript infers `channel` as string
let channel = "Lucky";

// ❌ Error: channel is a string, cannot assign a number
// channel = 12231;


// Explicitly declaring type as string
let chaiFlavour: string = "Masala Munch";

// ✅ Allowed: assigning another string
chaiFlavour = "Ginger Masala";

// ❌ Error: number is not assignable to string
// chaiFlavour = 2;


// Boolean type variable
let order: boolean = false;

// ❌ Error examples
// order = "yes";
// order = 1;
