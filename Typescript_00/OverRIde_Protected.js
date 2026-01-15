var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name, 
    // protected → accessible inside this class AND child classes
    employees) {
        if (employees === void 0) { employees = []; }
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    // OVERRIDING the parent property `name`
    // Must be compatible type (string)
    function ITDepartment(id, name, admins) {
        // Calling parent constructor
        var _this = _super.call(this, id, name) || this;
        _this.name = name;
        _this.admins = admins;
        return _this;
    }
    // Accessing protected property from parent class
    ITDepartment.prototype.showEmployees = function () {
        console.log("Employees:", this.employees);
    };
    return ITDepartment;
}(Department));
var it = new ITDepartment(1, "IT Department", ["Alex", "Sam"]);
it.addEmployee("Sashanka");
it.addEmployee("Lucky");
it.describe(); // Department (1): IT Department
it.showEmployees(); // Employees: ["Sashanka", "Lucky"]
// Not allowed (protected)
// it.employees.push("John");
var Vehicle = /** @class */ (function () {
    function Vehicle(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    // protected method → meant to be overridden
    Vehicle.prototype.calculateMaxSpeed = function () {
        // base calculation
        return this.speed;
    };
    // public method calls protected method
    Vehicle.prototype.showDetails = function () {
        console.log("".concat(this.model, " max speed is ").concat(this.calculateMaxSpeed(), " km/h"));
    };
    return Vehicle;
}());
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(speed) {
        return _super.call(this, "Sports Car", speed) || this;
    }
    // OVERRIDING protected method
    SportsCar.prototype.calculateMaxSpeed = function () {
        // sports car boosts speed
        return this.speed + 100;
    };
    return SportsCar;
}(Vehicle));
var normalCar = new Vehicle("Sedan", 120);
var fastCar = new SportsCar(200);
normalCar.showDetails();
// Sedan max speed is 120 km/h
fastCar.showDetails();
// Sports Car max speed is 300 km/h (overridden method)
//! Getter and Setter
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        // private property → cannot be accessed directly
        this._marks = 0;
    }
    Object.defineProperty(Student.prototype, "marks", {
        // GETTER → used to READ private data
        get: function () {
            return this._marks;
        },
        // SETTER → used to UPDATE private data with validation
        set: function (value) {
            if (value < 0 || value > 100) {
                throw new Error("Marks must be between 0 and 100");
            }
            this._marks = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s1 = new Student("Sashanka");
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
var University = /** @class */ (function () {
    function University(student) {
        this.student = student;
    }
    // static method → cannot access instance properties
    University.getUniversityName = function () {
        return University.universityName;
    };
    // instance method → can access static members via class name
    University.prototype.showInfo = function () {
        console.log("".concat(this.student, " studies at ").concat(University.universityName));
    };
    // static property → shared by all instances, accessed via class name
    University.universityName = "XYZ Technical University";
    return University;
}());
// Accessing static property directly via class
console.log(University.universityName); // XYZ Technical University
// Accessing static method directly via class
console.log(University.getUniversityName()); // XYZ Technical University
// Creating an object
var student1 = new University("Rahul");
// Instance method using static data
student1.showInfo(); // Rahul studies at XYZ Technical University
//  NOT allowed (will cause error)
// console.log(student1.universityName);
// student1.getUniversityName();
