//! Type Guards

type combinable = string | number
type numeric = boolean | number
type Universal = combinable & numeric ; 

function add(a : combinable , b : combinable){
         // operator + can not be apply to types combinable and combinable
         //To overcome this situation we need type Guards
         if(typeof a == 'string' || typeof b == 'string'){
                  return a.toString() + b.toString();
         }else{
                  return a + b ;
         }
}

console.log(add(20 , 30));

console.log(add("as" , 20));

type Admin = {
         name : string;
         previlege : string[] ;
}

type Employee = {
         name : string;
         startDate : Date ;
}

type ElevetedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin; 

const emp1 : ElevetedEmployee = {
         name : "Lucky Swain",
         previlege : ["Create Server"],
         startDate : new Date(),


} 

function printEmployee(emp: UnknownEmployee) {
  console.log("Name:", emp.name);

  // Type guard using 'in'
  if ("privilege" in emp) {
    console.log("Privileges:", emp.privilege);
  }

  if ("startDate" in emp) {
    console.log("Start Date:", emp.startDate);
  }
}


//! type casting or type assertion
const UserInput = <HTMLInputElement>document.getElementById("User") ;// inference 
UserInput.value = "Hi There lucky";


const User = document.getElementById("user-input")! as HTMLInputElement;





