const user = {
    name: "Code Exploit",
    age: 24,
};

const admin = {
    ...user, // Spread operator to copy properties from user
    role: "admin", // Adding a new property
    "I love github": true,
}

console.log(admin); // { name: 'Code Exploit', age: 24, role: 'admin', 'I love github': true }