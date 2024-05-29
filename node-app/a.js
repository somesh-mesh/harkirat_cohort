"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hi there " + user.firstName);
}
// Create a User object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
};
// Call the functions and log their outputs
console.log("Is user legal? " + isLegal(user)); // Should log: Is user legal? true
greet(user); // Should log: Hi there John
