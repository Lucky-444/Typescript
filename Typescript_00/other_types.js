"use strict";
//! any disables TypeScript type checking
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = 10;
value = "Lucky";
value = true;
// No error at compile time (❌ dangerous)
value.toUpperCase();
value.nonExistingMethod();
/**      No type safety

         No IntelliSense help

         Errors appear only at runtime

         Defeats purpose of TypeScript       */
//! unknown forces type checking before usage
let data;
data = 10;
data = "Lucky";
//  Error: Object is of type 'unknown'
// data.toUpperCase();
//  Type narrowing required
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
//! Never
function generateError(message, code) {
    throw { message: message, statusCode: code };
    //we dont know about the return stattement 
    //is it returns anything or not
}
//# sourceMappingURL=other_types.js.map