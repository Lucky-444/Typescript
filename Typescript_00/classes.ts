console.log("classes");

class Department {
  name: string;

  constructor(n: string) {
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
  name : "Lucky" ,
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
  public FullName: string;

  // private → accessible ONLY inside this class
  private employee: string[] = []; // initialized with empty array

  // constructor runs when object is created
  constructor(n: string) {
    this.FullName = n;
  }

  // this: Depart → ensures method is called on Depart object only
  describe(this: Depart) {
    console.log("Department:", this.FullName);
  }

  // public method to add employee safely
  public addEmployee(emp: string) {
    this.employee.push(emp);
  }

  // public method to read private data (controlled access)
  public getEmployees() {
    FullName += emp;
    console.log(this.employee);
  }
}

const d1 = new Depart("HR");

d1.addEmployee("Sashanka");
d1.addEmployee("Rahul");

d1.describe();       // Department: HR
d1.getEmployees();   // ["Sashanka", "Rahul"] 

d1.FullName = "Sashank";
// d1.employee = ["Sashank Sekhar Swaint"];// propertyEmployee is private not be accsible out side

//! readOnly 
// Class representing a Department
class D {
  constructor(
    // readonly → value can be assigned ONLY once (inside constructor)
    public readonly id: number,

    // public → accessible from outside the class
    public FullName: string,

    // private → accessible ONLY inside this class
    // initialized with default empty array if not passed
    private employee: string[] = []
  ) {}

  // Method to display department details
  describe() {
    // 'this' refers to the object that calls the method
    console.log("Department:", this.FullName, "ID:", this.id);
  }

  // Public method to safely add an employee
  addEmployee(emp: string) {
    // Allowed because 'employee' is private but accessed inside class
    this.employee.push(emp);
  }
}

// Creating an object of class D
// Arguments must match constructor order & types
const x = new D(1, "Stranger Things", ["Lucky", "Sashanke"]);

// Accessing public method
x.describe();

// ❌ Not allowed – cannot modify readonly property
// x.id = 2;

// ❌ Not allowed – private property
// x.employee.push("Alex");

// ✅ Allowed – controlled modification
x.addEmployee("Alex");


const x = new D(10 , "staranger Things" , ["Lucky" , "Sashanke"]);

console.log(x);

x.describe();



