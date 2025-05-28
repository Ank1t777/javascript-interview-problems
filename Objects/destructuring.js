//destructuring of objects in javascript
const person = {   
    name: 'Code',
    age: 24,    
    city: 'Shillong',
    country: 'India',
    fullname: {
        fistname: 'Code',
        lastname: 'Exploit'
    }
};

const name = "xyz";

// Destructuring the person object
const { name: personName, age, city, country, fullname: { firstname, lastname } } = person; //nested destructuring
// Note: 'name' is a reserved keyword in JavaScript, so we use 'personName' to avoid conflicts
console.log(personName); // Code
console.log(firstname); // Code
console.log(lastname); // Exploit