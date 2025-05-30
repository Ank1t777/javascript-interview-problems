//object reference
// In JavaScript, objects are reference types. When you pass an object to a function, you are passing a reference to that object, not a copy of it. This means that if you modify the object inside the function, the changes will be reflected outside the function as well.
let c = { greeting: "Hello" };
let d = c; // d is a reference to the same object as c
d.greeting = "Hi"; // Modifying the object through d

console.log(c.greeting); // Output: "Hi" (c is affected by the change made through d)
console.log(d.greeting); // Output: "Hi" (d reflects the change made to the object)

//eg 2

console.log({ name: "code"} == {name: "code"}); // Output: false
// This is because each object literal creates a new object in memory, so they are not the same reference.
console.log({ name: "code"} === {name: "code"});

// Output: false
// The same applies to arrays and functions, which are also reference types in JavaScript.

//eg 3

let person = { name: "code" };
const members = [person];
person = null;

console.log(members); // Output: [{ name: "code" }]
console.log(members[0].name); // Output: "code"