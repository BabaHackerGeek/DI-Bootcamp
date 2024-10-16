/*
  Instructions:
  1. Define the following types:
    - 'User': Contains 'type', 'name', and 'age'.
    - 'Product': Contains 'type', 'id', and 'price'.
    - 'Order': Contains 'type', 'orderId', and 'amount'.

  2. Create a function 'handleData' that accepts an array of 'User | Product | Order'. Implement type guards to:
    - For 'User' objects: Return a greeting message with the user's name and age.
    - For 'Product' objects: Return a message with the product ID and its price.
    - For 'Order' objects: Return a summary of the order with its ID and amount.

  3. Ensure your function handles unexpected cases gracefully.
*/

// Define the User type
type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  // Define the Product type
  type Product = {
    type: 'product';
    id: number;
    price: number;
  };
  
  // Define the Order type
  type Order = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  // Define the function handleData that accepts an array of User | Product | Order
  function handleData(data: (User | Product | Order)[]): void {
    // Iterate over each item in the array
    data.forEach(item => {
      // Use type guards based on the 'type' property
      switch (item.type) {
        case 'user':
          console.log(`Hello ${item.name}, you are ${item.age} years old.`);
          break;
        case 'product':
          console.log(`Product ID: ${item.id}, Price: $${item.price}`);
          break;
        case 'order':
          console.log(`Order ID: ${item.orderId}, Amount: $${item.amount}`);
          break;
        default:
          console.log("Unknown data type encountered.");
      }
    });
  }
  
  // Test the function with an array of different objects
  const testData: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD12345', amount: 150.75 },
    { type: 'user', name: 'Bob', age: 30 }
  ];
  
  handleData(testData);
  
  // Output:
  // Hello Alice, you are 25 years old.
  // Product ID: 101, Price: $29.99
  // Order ID: ORD12345, Amount: $150.75
  // Hello Bob, you are 30 years old.
  