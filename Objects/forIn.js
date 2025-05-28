//Iterating over an object using for...in loop
// We can iterate over an object using a for...in loop.

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
}

multiplyByTwo(nums);

function multiplyByTwo(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;   
        }
    }
}
//before multiplying
console.log("before multiplying by 2: " + nums.a);
console.log("before multiplying by 2: " + nums.b);

multiplyByTwo(nums);

//aftermultiplying
console.log("After multiplying by 2: " + nums.a);
console.log("After multiplying by 2: " + nums.b);