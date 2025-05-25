function evaluate(operation) 
{
    return function(a) 
    {
        return function(b) 
        {
            switch(operation) 
            {
                case "sum":
                    return a + b;
                break;
                
                case "multiply":
                    return a * b;
                break;
                
                case "divide":
                    return Math.floor(a / b);
                break;
                
                case "substract":
                    return a - b;
                break;
                
                default: 
                    return "Unknown operation";
            }
        }
    }
}



console.log(evaluate("sum")(2)(3));
console.log(evaluate("Multiply")(2)(3));  // This works correctly
