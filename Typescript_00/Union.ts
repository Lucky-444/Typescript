// Union , Literal Types , Custome Types , Type Alias

// | -> this is called as [Pipe] in Typescript

//! Union 
function add(num1: number | string, num2: number | string) {
  let result;

  if (typeof num1 == "string" && typeof num2 == "string") {
    result = num1.toString() + num2.toString();
    // If num1 is string and num2 is number → convert num1 to number
  } else if (typeof num1 === "string" && typeof num2 === "number") {
    result = +num1 + num2;
  }

  // If num1 is number and num2 is string → convert num2 to number
  else if (typeof num1 === "number" && typeof num2 === "string") {
    result = num1 + +num2;
  } else if (typeof num1 == "number" && typeof num2 == "number") {
    result = num1 + num2;
  }

  return result;
}

// console.log(add(10, 20));
// console.log(add("Lucky", " swain")); // I want it will handle this also and show me the result as : Luckyswain


//! Now Literal Types 
function sum(n1 : number | string , n2 : number | string , conversionType : "as-number" | "as-string"){
         let result ; 
         if(typeof n1 == "number" && typeof n2 == "number"){
                  result = n1 + n2;
         }

         else if(typeof n1 == "string" && typeof n2 == "string"){
                  result = n1.concat(n2);
         }else if(typeof n1 == "string" && typeof n2 == "number"){
                  result = +n1 + n2;
         }else if(typeof n1 == "number" && typeof n2 == "string") {
                  result = n1 + +n2;
         }

         console.log(`${conversionType} ${n1} ${n2}`);

         return  result ;
}

console.log(sum(19 , 34 , "as-number"));
console.log(sum("Lucky" , "swain" , "as-string"));
console.log(sum("90" , 34 , "as-number"));



//! Type alias
type Combined = number | string ;
function Sum(x1 :Combined , x2 : Combined) {
         if(typeof x1 === "string" && typeof x2 === "string"){
                  console.log("String Result :");
                  console.log(x1.concat(x2));
         }else if(typeof x1  === "number" && typeof x2 === "number"){
                  console.log("Number Result :") ;
                  console.log(x1 + x2);
         }
}

Sum(10 , 20);
Sum("Sashank" , " + S");



//Object Type alias
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};

// Function using Object Type Alias
function printUser(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Student: ${user.isStudent}`);
}

// Correct object (matches the structure)
const user1: User = {
  name: "Lucky",
  age: 21,
  isStudent: true,
};

printUser(user1);

