"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Somesh", age: 27 }, { name: "Meshram", age: 7 });
console.log(age);
