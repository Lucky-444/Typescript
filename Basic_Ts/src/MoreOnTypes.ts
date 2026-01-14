let response:any = "42";
//Force Full type assertion
// Forceful type assertion
// We are telling TypeScript: "Trust me, this is a string"
let numericLength: number = (response as string).length;

console.log(numericLength); // 2
type Book = {
         type : string;
}

let BooString = '{"type" : "oneThing"}';

let bookObject = JSON.parse(BooString) as Book;
console.log(bookObject.type); // oneThing



////////////////////////////////////////////////////////
let value:any

value = "Chai";
value = 43
value = [1 , 2 , 3];
value = 2.5
value.toUpperCase();


// unknown can hold ANY value, but you must check before using it
let newvalue: unknown;

newvalue = "Chai";
newvalue = 43;
newvalue = [1, 2, 3];
newvalue = 2.5;

// ❌ Not allowed: TypeScript doesn't know what newvalue is
// newvalue.toUpperCase();


// Type narrowing using typeof
if (typeof newvalue === "string") {
  // Inside this block, TypeScript knows newvalue is a string
  newvalue.toUpperCase(); // ✅ allowed
}


try {
  // Some code that may throw an error
} catch (error) {

  // error is of type `unknown`
  console.log(error);

  // Type narrowing using instanceof
  if (error instanceof Error) {
    // Inside this block, error is an Error object
    console.log(error.message); // ✅ safe
  } else {
    // When error is not an Error
    console.log("Unknown error occurred");
  }
}



const data: unknown = "chai" ;
const strData : string = data as string;

type Role = "admin" | "user"

function redirectBasedOnRole(role : Role ) : void {
         if(role === "admin"){
                  console.log("redirecting to admin dashBoard")
                  return; 
         }

         if(role === "user"){
                  console.log("redirecting to user dashboard");
                  return;
         }
         role; // never becoz on above you checked every thing
         //Admin and User 
         //if we have another field superadmin
         //then role gets -> superAdmin 
}







