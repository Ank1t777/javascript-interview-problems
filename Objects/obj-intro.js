//whenever the object key is in strings we have to use bracket notation to access it
//eg

const user = {
    name: "Code Exploit",
    age: 24,
    "I love github": true,
}

console.log(user["I love github"]); // true
//if the key is not in string we can use dot notation