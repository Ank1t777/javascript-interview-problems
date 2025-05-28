const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN why?? because arrow functions do not have their own `this` context, they inherit it from the parent scope, which in this case is the global scope where `this.radius` is undefined.