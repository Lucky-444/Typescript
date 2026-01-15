"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("classes");
class Department {
    name;
    constructor(n) {
        // 'this' refers to the object that is created from the class
        this.name = n;
    }
    describe() {
        // 'this' depends on HOW the function is called
        // NOT where it is written
        console.log("Describe The Department Name:", this.name);
    }
}
const X = new Department("accounting");
// Here, 'this' inside describe() refers to X
console.log(X);
X.describe(); // ✔ this === X
const accountingCopy = {
    // We are COPYING the function reference
    // NOT the object 'X'
    //Let add accountingCopy as a name 
    name: "Lucky",
    describe: X.describe,
};
// Now describe() is called on accountingCopy
// So 'this' refers to accountingCopy
accountingCopy.describe();
// ❌ accountingCopy does NOT have 'name' property
// Output: Describe The Department Name: undefined
console.log("accounting Copy", accountingCopy);
//! Access Modifier [Private , Public];
class Depart {
    //If you dont wrote the public Keyword then it bydefault 
    // public → accessible everywhere (default)
    FullName;
    // private → accessible ONLY inside this class
    employee = []; // initialized with empty array
    // constructor runs when object is created
    constructor(n) {
        this.FullName = n;
    }
    // this: Depart → ensures method is called on Depart object only
    describe() {
        console.log("Department:", this.FullName);
    }
    // public method to add employee safely
    addEmployee(emp) {
        this.employee.push(emp);
    }
    // public method to read private data (controlled access)
    getEmployees() {
        console.log(this.employee);
    }
}
const d1 = new Depart("HR");
d1.addEmployee("Sashanka");
d1.addEmployee("Rahul");
d1.describe(); // Department: HR
d1.getEmployees(); // ["Sashanka", "Rahul"] 
d1.FullName = "Sashank";
// d1.employee = ["Sashank Sekhar Swaint"];// propertyEmployee is private not be accsible out side
//! readOnly 
class D {
    id;
    FullName;
    employee;
    constructor(id, // can be set ONLY once
    FullName, employee = []) {
        this.id = id;
        this.FullName = FullName;
        this.employee = employee;
    }
    describe() {
        console.log("Department:", this.FullName, "ID:", this.id);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
}
const x = new D(10, "staranger Things", ["Lucky", "Sashanke"]);
console.log(x);
x.describe();
//# sourceMappingURL=classes.js.map