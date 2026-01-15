"use strict";
//Object , Array , Tuple , Enum 
Object.defineProperty(exports, "__esModule", { value: true });
const Person = {
    FirstName: "Lucky",
    Age: 23,
    Adress: {
        City: "Bhubaneswar"
    },
    skills: ["c ++ ", "Java", "Python", "JavaScript"]
};
console.log(Person);
//! Tuple
const P = {
    name: "Raghav",
    age: 62,
    skills: ["c ++", "Java", "pythion"],
    product: [0, "macBook M2"],
};
P.product[0] = 0; // Replace a nUmber with other value // valid
// P.product[1] = 1000 ; Invalid
P.product[1] = "MacBook Air M3";
var role;
(function (role) {
    role[role["AUTHOR"] = 0] = "AUTHOR";
    role[role["CLIENT"] = 1] = "CLIENT";
    role[role["USER"] = 2] = "USER";
})(role || (role = {}));
const PP = {
    name: "sashank",
    age: 20,
    skills: ["c ++", "java", "Python", "Name"],
    product: [10, "MacBook AIR M1"],
    role: role.AUTHOR, // we want this variable as dynamic 
};
if (PP.role == role.AUTHOR) {
    console.log("AUthor Person");
}
else if (PP.role === role.CLIENT) {
    console.log("Client User Only");
}
else {
    console.log("User Only");
}
//# sourceMappingURL=Object_enum_tuple.js.map