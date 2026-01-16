//! Type Guards
function add(a, b) {
    // operator + can not be apply to types combinable and combinable
    //To overcome this situation we need type Guards
    if (typeof a == 'string' || typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(add(20, 30));
console.log(add("as", 20));
