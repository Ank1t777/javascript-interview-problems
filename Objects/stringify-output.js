const settings = {
    username: "Code Exploit",   
    theme: "dark",
    notifications: true,
}

const data = JSON.stringify(settings, ["username", "theme"]);
console.log(data); // {"username":"Code Exploit","theme":"dark"}