// Instructions
// Using the given object:
let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries that logs the 3 fruits from the groceries object
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Invoke the displayGroceries function
displayGroceries();
// This will log:
// pear
// apple
// banana

// Create another arrow function named cloneGroceries
const cloneGroceries = () => {
    // Create a variable named user that is a copy of the client variable
    let user = client;
    
    // Change the client variable to "Betty"
    client = "Betty";
    
    // Will we also see this modification in the user variable? Why?
    // No, we will not see the modification in the user variable because strings are immutable
    // and `user` is simply a copy of the `client` variable value at the time of assignment.

    // Create a variable named shopping that is equal to the groceries variable
    let shopping = groceries;
    
    // Change the value of the totalPrice key to "35$"
    shopping.totalPrice = "35$";
    
    // Will we also see this modification in the shopping object? Why?
    // Yes, we will see this modification in the shopping object because `shopping` is a reference
    // to the same object as `groceries`. Modifying `shopping` will affect `groceries` since they both
    // point to the same memory location.

    // Change the value of the paid key to false
    shopping.other.paid = false;
    
    // Will we also see this modification in the shopping object? Why?
    // Yes, the modification to `paid` is also seen in the `shopping` object. This is because `shopping`
    // and `groceries` are references to the same object, so changes in one are reflected in the other.
};

// Invoke the cloneGroceries function
cloneGroceries();

// Check the state of the variables after invoking cloneGroceries
console.log("client:", client); // Output: Betty
console.log("user:", user); // Output: John
console.log("groceries:", groceries); 
// Output will show:
// {
//   fruits: ["pear", "apple", "banana"],
//   vegetables: ["tomatoes", "cucumber", "salad"],
//   totalPrice: "35$",
//   other: {
//     paid: false,
//     meansOfPayment: ["cash", "creditCard"]
//   }
// }
