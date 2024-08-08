#🌟 Exercise 1 : Favorite Numbers
#Instructions
#Create a set called my_fav_numbers with all your favorites numbers.
#Add two new numbers to the set.
#Remove the last number.
#Create a set called friend_fav_numbers with your friend’s favorites numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# Step 1: Create a set called my_fav_numbers with all your favorite numbers
my_fav_numbers = {7, 14, 21}

# Convert set to list to add elements in a specific order
my_fav_numbers_list = list(my_fav_numbers)

# Step 2: Add two new numbers to the list
my_fav_numbers_list.append(28)
my_fav_numbers_list.append(35)

# Step 3: Remove the last number
my_fav_numbers_list.pop()

# Convert list back to set
my_fav_numbers = set(my_fav_numbers_list)

# Step 4: Create a set called friend_fav_numbers with your friend’s favorite numbers
friend_fav_numbers = {3, 6, 9}

# Step 5: Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Display the sets
print("My Favorite Numbers:", my_fav_numbers)
print("Friend's Favorite Numbers:", friend_fav_numbers)
print("Our Favorite Numbers:", our_fav_numbers)


#🌟 Exercise 2: Tuple
#Instructions
#Given a tuple which value is integers, is it possible to add more integers to the tuple?

print ("Tuples in Python are immutable, which means that once a tuple is created, its contents cannot be changed. Therefore, it is not possible to add more integers directly to the tuple. However, we can create a new tuple by concatenating the original tuple with another tuple containing the new integers.")

#🌟 Exercise 3: List
#Instructions 
#Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

#Remove “Banana” from the list.
#Remove “Blueberries” from the list.
#Add “Kiwi” to the end of the list.
#Add “Apples” to the beginning of the list.
#Count how many apples are in the basket.
#Empty the basket.
#Print(basket)

# Initial list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Step 1: Remove "Banana" from the list
basket.remove("Banana")

# Step 2: Remove "Blueberries" from the list
basket.remove("Blueberries")

# Step 3: Add "Kiwi" to the end of the list
basket.append("Kiwi")

# Step 4: Add "Apples" to the beginning of the list
basket.insert(0, "Apples")

# Step 5: Count how many apples are in the basket
apple_count = basket.count("Apples")

# Step 6: Empty the basket
basket.clear()

# Step 7: Print the basket
print("Basket after modifications:", basket)

# Print the count of apples
print("Number of apples in the basket:", apple_count)


#🌟 Exercise 4: Floats
#Instructions
#Recap – What is a float? What is the difference between an integer and a float?
#Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#Can you think of another way to generate a sequence of floats?

# Recap - What is a float?
print ("A float, short for floating point number, is a number that has a decimal point. Floats are used to represent real numbers and can have fractional parts, unlike integers, which are whole numbers without any decimal part.")
# Generate the sequence using list comprehension
sequence = [x * 0.5 for x in range(3, 11)]

# Print the sequence
print(sequence)


#🌟 Exercise 5: For Loop
#Instructions
#Use a for loop to print all numbers from 1 to 20, inclusive.
#Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# Step 1: Print all numbers from 1 to 20, inclusive
print("All numbers from 1 to 20:")
for i in range(1, 21):
    print(i)

# Step 2: Print numbers from 1 to 20 that have an even index
print("\nNumbers from 1 to 20 with even indices:")
for i in range(1, 21):
    if (i - 1) % 2 == 0:  # Check if the index is even
        print(i)

#🌟 Exercise 6 : While Loop
#Instructions
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# Your name
my_name = "John"  # Replace "John" with your actual name

# Start the while loop
while True:
    # Ask the user for their name
    user_input = input("Please enter your name: ")
    
    # Check if the input is equal to your name
    if user_input == my_name:
        print("You entered the correct name!")
        break
    else:
        print("That's not my name. Please try again.")


#🌟 Exercise 7: Favorite fruits
#Instructions
#Ask the user to input their favorite fruit(s) (one or several fruits).
#Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#Now that we have a list of fruits, ask the user to input a name of any fruit.
#If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# Step 1: Ask the user to input their favorite fruits
favorite_fruits = input("Please enter your favorite fruits, separated by spaces (e.g., 'apple mango cherry'): ")

# Step 2: Convert the string of words into a list of words
favorite_fruits_list = favorite_fruits.split()

# Step 3: Ask the user to input the name of any fruit
fruit_choice = input("Please enter the name of any fruit: ")

# Step 4 and 5: Check if the input fruit is in the favorite fruits list and print the appropriate message
if fruit_choice in favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")

#Exercise 8: Who ordered a pizza ?
#Instructions
#Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#As they enter each topping, print a message saying you’ll add that topping to their pizza.
#Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# Initialize an empty list to store the toppings
toppings = []

# Start the loop
while True:
    # Ask the user for a pizza topping
    topping = input("Enter a pizza topping (or type 'quit' to finish): ")
    
    # Check if the user wants to quit
    if topping.lower() == 'quit':
        break
    
    # Add the topping to the list
    toppings.append(topping)
    
    # Print a message confirming the addition
    print(f"We'll add {topping} to your pizza.")

# Calculate the total price: base price is 10, plus 2.5 for each topping
base_price = 10
topping_price = 2.5
total_price = base_price + (topping_price * len(toppings))

# Print the list of toppings and the total price
print("\nYou have ordered a pizza with the following toppings:")
for topping in toppings:
    print(f"- {topping}")

print(f"\nTotal price: ${total_price:.2f}")

#Exercise 9: Cinemax
#Instructions
#A movie theater charges different ticket prices depending on a person’s age.
#if a person is under the age of 3, the ticket is free.
#if they are between 3 and 12, the ticket is $10.
#if they are over the age of 12, the ticket is $15.

#Ask a family the age of each person who wants a ticket.

#Store the total cost of all the family’s tickets and print it out.

#A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#At the end, print the final list.

# Part 1: Ticket Prices Based on Age

# Initialize total cost
total_cost = 0

# Ask for the number of family members
num_family_members = int(input("Enter the number of family members: "))

# Loop through each family member to get their age and calculate the cost
for i in range(num_family_members):
    age = int(input(f"Enter the age of family member {i+1}: "))
    
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    
    total_cost += ticket_price

# Print the total cost
print(f"The total cost of all the family's tickets is: ${total_cost}")

# Part 2: Restriction for Teenagers

# List of names of teenagers
teenagers = ["Alice", "Bob", "Charlie", "David", "Eva"]

# Loop through the list and ask for each teenager's age
permitted_teenagers = []

for name in teenagers:
    age = int(input(f"Enter the age of {name}: "))
    
    if age < 16 or age > 21:
        permitted_teenagers.append(name)

# Print the final list of permitted teenagers
print("The final list of teenagers who are permitted to watch the movie:")
for name in permitted_teenagers:
    print(name)


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :
#
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
#
# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

# Initial list of sandwich orders
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"
]

# Remove all occurrences of "Pastrami sandwich"
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Create an empty list to hold finished sandwiches
finished_sandwiches = []

# Process each sandwich order
while sandwich_orders:
    # Remove the first sandwich from the list and add it to the finished list
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

# Print the final list of finished sandwiches
print("\nAll sandwiches have been made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")
