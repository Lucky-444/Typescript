// --------------------------------------------
// Base object type for a simple chai order
type ChaiOrder = {
  type: string;
  sugar: number;
};

// Custom TYPE GUARD function
// If this returns true, TypeScript treats obj as ChaiOrder
function isChaiOrder(obj: unknown): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as any).type === "string" &&
    typeof (obj as any).sugar === "number"
  );
}

// Function that accepts either a ChaiOrder object or a string
function serveChai(item: ChaiOrder | string) {

  // Using custom type guard for narrowing
  if (isChaiOrder(item)) {
    // Here item is ChaiOrder
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }

  // Here item is string
  return `Serving custom chai: ${item}`;
}

// ✅ Function calls
serveChai({ type: "Masala", sugar: 2 });
serveChai("Special Ginger Chai");


// --------------------------------------------
// Discriminated union using literal `type`

type MasalaChai = {
  type: "masala";          // discriminator
  spicyLevel: number;
  hot: string;
};

type GingerChai = {
  type: "ginger";          // discriminator
  amount: number;
  aroma: string;
};

// Union type
type Chai = MasalaChai | GingerChai;


// Narrowing using discriminated union (BEST PRACTICE)
function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      // TypeScript knows order is MasalaChai
      return `Masala chai with spice level ${order.spicyLevel}`;

    case "ginger":
      // TypeScript knows order is GingerChai
      return `Ginger chai with aroma ${order.aroma}`;

    default:
      // Exhaustiveness safety (rarely hit)
      return "Unknown chai";
  }
}

// ✅ Function calls
makeChai({ type: "masala", spicyLevel: 5, hot: "yes" });
makeChai({ type: "ginger", amount: 2, aroma: "strong" });


// --------------------------------------------
// Narrowing using `in` operator

function brew(order: MasalaChai | GingerChai) {

  // Property existence check
  if ("spicyLevel" in order) {
    // order is MasalaChai
    return `Brewing masala chai with spice level ${order.spicyLevel}`;
  }

  if ("amount" in order) {
    // order is GingerChai
    return `Brewing ginger chai with amount ${order.amount}`;
  }
}

// ✅ Function calls
brew({ type: "masala", spicyLevel: 3, hot: "yes" });
brew({ type: "ginger", amount: 1, aroma: "mild" });


// Type guard function
// This tells TypeScript:
// "If this function returns true, then `arr` is a string[]"
function isStringOrArray(arr: unknown): arr is string[] {

  // First check: must be an array
  if (!Array.isArray(arr)) {
    return false;
  }

  // Second check: every element must be a string
  return arr.every(item => typeof item === "string");
}