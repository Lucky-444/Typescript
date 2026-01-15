class Department {
  constructor(
    public readonly id: number,
    public name: string,
    // protected → accessible inside this class AND child classes
    protected employees: string[] = []
  ) {}

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }
}

class ITDepartment extends Department {
  // OVERRIDING the parent property `name`
  // Must be compatible type (string)
  constructor(
    id: number,
    public override name: string,
    private admins: string[]
  ) {
    // Calling parent constructor
    super(id, name);
  }

  // Accessing protected property from parent class
  showEmployees() {
    console.log("Employees:", this.employees);
  }
}

const it = new ITDepartment(1, "IT Department", ["Alex", "Sam"]);

it.addEmployee("Sashanka");
it.addEmployee("Lucky");

it.describe();        // Department (1): IT Department
it.showEmployees();   // Employees: ["Sashanka", "Lucky"]

// Not allowed (protected)
// it.employees.push("John");

class Vehicle {
  constructor(public model: string, protected speed: number) {}

  // protected method → meant to be overridden
  protected calculateMaxSpeed(): number {
    // base calculation
    return this.speed;
  }

  // public method calls protected method
  showDetails() {
    console.log(`${this.model} max speed is ${this.calculateMaxSpeed()} km/h`);
  }
}


class SportsCar extends Vehicle {
  constructor(speed: number) {
    super("Sports Car", speed);
  }

  // OVERRIDING protected method
  protected override calculateMaxSpeed(): number {
    // sports car boosts speed
    return this.speed + 100;
  }
}


const normalCar = new Vehicle("Sedan", 120);
const fastCar = new SportsCar(200);

normalCar.showDetails();
// Sedan max speed is 120 km/h

fastCar.showDetails();
// Sports Car max speed is 300 km/h (overridden method)


//! Getter and Setter
class Student {
  // private property → cannot be accessed directly
  private _marks: number = 0;

  constructor(public name: string) {}

  // GETTER → used to READ private data
  get marks(): number {
    return this._marks;
  }

  // SETTER → used to UPDATE private data with validation
  set marks(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Marks must be between 0 and 100");
    }
    this._marks = value;
  }
}


const s1 = new Student("Sashanka");
// setter is called (looks like property access)
s1.marks = 85;
// getter is called
console.log(s1.marks); // 85        
// invalid value
// s1.marks = 120;

//! static
//We use static to store data or logic that belongs to the class itself and should be shared across all instances. Inconsistent results occur only when static is misused for instance-specific data.

//If every object needs its own copy → NOT static
// If all objects must share one copy → static

class University {
  // static property → shared by all instances, accessed via class name
  static universityName: string = "XYZ Technical University";

  constructor(public student: string) {}

  // static method → cannot access instance properties
  static getUniversityName() {
    return University.universityName;
  }

  // instance method → can access static members via class name
  showInfo() {
    console.log(`${this.student} studies at ${University.universityName}`);
  }
}

// Accessing static property directly via class
//To access the Static Methods of Properties we dont need to create The Objects
console.log(University.universityName); // XYZ Technical University

// Accessing static method directly via class
console.log(University.getUniversityName()); // XYZ Technical University

// Creating an object
const student1 = new University("Rahul");

// Instance method using static data
student1.showInfo(); // Rahul studies at XYZ Technical University

//  NOT allowed (will cause error)
// console.log(student1.universityName);
// student1.getUniversityName();



//! abstract Class
// An abstract class is a class that cannot be instantiated directly.
// It’s meant to be extended by child classes.

/**It can have:

Abstract methods (must be implemented in child)

Regular methods

Properties */

// Abstract base class TO make Abstract Class Use Abstract KeyWord
abstract class Employee {
  constructor(
    public name: string,
    protected salary: number
  ) {}

  // Abstract method → must be implemented in child classes
  abstract calculateBonus(): number;

  // Regular method → can be used by child classes
  showDetails() {
    console.log(`${this.name} earns $${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, private teamSize: number) {
    super(name, salary);
  }

  // Implement abstract method
  calculateBonus(): number {
    // Manager bonus based on salary and team size
    return this.salary * 0.2 + this.teamSize * 100;
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number, private projects: number) {
    super(name, salary);
  }

  // Implement abstract method
  calculateBonus(): number {
    // Developer bonus based on salary and projects
    return this.salary * 0.15 + this.projects * 150;
  }
}

//This Is Important We can not instantiate an abstract class
// ❌ Cannot instantiate abstract class
// const e = new Employee("Sashanka", 50000);

const m1 = new Manager("Rahul", 60000, 5);
const d1 = new Developer("Lucky", 50000, 3);

m1.showDetails(); // Rahul earns $60000
d1.showDetails(); // Lucky earns $50000

console.log("Manager Bonus:", m1.calculateBonus()); // Manager Bonus: 61000
console.log("Developer Bonus:", d1.calculateBonus()); // Developer Bonus: 50450


