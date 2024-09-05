// 🌟 Part I : Get Car Honda
// Instructions
// Create a function getCarHonda(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below).
// The function should loop through the array of objects and return the first car with the name “Honda”.
// Then, return a string in the format "This is a {car_make} {car_model} from {car_year}."
// Hint : Find an array method that returns the value of the first element in an array that passes a test.
// Use the cars inventory below:

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
  
  // Function to get the first Honda car and return the formatted string
  const getCarHonda = (carInventory) => {
    // Use the find method to get the first car with car_make as "Honda"
    const hondaCar = carInventory.find(car => car.car_make === "Honda");
    
    // Return the formatted string
    return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}.`;
  };
  
  // Test the function
  console.log(getCarHonda(inventory)); 
  // Output: This is a Honda Accord from 1983.
  
  
  // 🌟 Part II : Sort Car Inventory By Year
  // Instructions
  // Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. 
  // carInventory‘s value is an array which is an inventory of cars (see the array of objects below).
  // The function should return an inventory that is sorted by car_year, ascending.
  // Hint : Check out this tutorial on the sort method.
  // Use the cars inventory below:
  
  // Function to sort the car inventory by year
  const sortCarInventoryByYear = (carInventory) => {
    // Use the sort method to sort the array by car_year in ascending order
    return carInventory.sort((a, b) => a.car_year - b.car_year);
  };
  
  // Test the function
  console.log(sortCarInventoryByYear(inventory)); 
  // Output:
  // [
  //   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  //   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  //   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  //   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  //   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  // ]
  