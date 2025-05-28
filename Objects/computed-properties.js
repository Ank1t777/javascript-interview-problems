//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

//For instance:

const property = "firstName";
const name = "Code Exploit";

const user = {
    [property]: name,
};

console.log(user.firstName); // Code Exploit
//We can also use computed properties to create methods: