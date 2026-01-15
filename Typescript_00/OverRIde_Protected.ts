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

