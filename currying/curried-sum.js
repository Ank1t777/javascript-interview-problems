function curried(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c); // ← Add return here
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curried(sum);
console.log(curriedSum(2)(6)(1)); // Output: 9
