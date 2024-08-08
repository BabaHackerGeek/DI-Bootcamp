#🌟 Exercise 1 : Hello World
#Instructions
#Print the following output in one line of code:
#Hello world
#Hello world
#Hello world
#Hello world

print("Hello world\n" * 4)


#🌟 Exercise 2 : Some Math
#Instructions
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

from math import ceil
print ((99**3) * 8)


#🌟 Exercise 3 : What Is The Output ?
# Instructions
# Predict the output of the following code snippets:
# >>> 5 < 3
# >>> 3 == 3
# >>> 3 == "3"
# >>> "3" > 3
# >>> "Hello" == "hello"

print ("False")
print ("True")
print ("False")
print("TypeError: '>' not supported between instances of 'str' and 'int'") 
print ("False")


#🌟 Exercise 4 : Your Computer Brand
#Instructions
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Asus"
print(f"I have an {computer_brand} computer")


#🌟 Exercise 5 : Your Information
#Instructions
#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
#Have your code print the info message.
#Run your code

name = "Baroukh"
age = 21
shoe_size = 42
info = f"Hi there ;) My name is {name} and I'm now {age} years old. My shoe size is {shoe_size} and my actual dream is to help Israel attacking Iran by integrating 8200 unit of Tsahal."

print(info)


#🌟 Exercise 6 : A & B
#Instructions
#Create two variables, a and b.
#Each variable value should be a number.
#If a is bigger then b, have your code print Hello World.

a = 5
b = 55

if a > b:
    print("Hello World")
else:
    print("")


#🌟 Exercise 7 : Odd Or Even
#Instructions
#Write code that asks the user for a number and determines whether this number is odd or even.

user_number = int(input("Please provide a number: "))

if user_number % 2 == 0:
    print("You entered an even number")
else:
    print("You entered an odd number")


#🌟 Exercise 8 : What’s Your Name ?
#Instructions
#Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

user_name = input("Please provide your name: ")

if user_name == "Baroukh":
    print("Oh wow! So cool... we have the same name!")
else:
    print("Nice to meet you, " + user_name + "!")


#🌟 Exercise 9 : Tall Enough To Ride A Roller Coaster
#Instructions
#Write code that will ask the user for their height in centimeters.
#If they are over 145cm print a message that states they are tall enough to ride.
#If they are not tall enough print a message that says they need to grow some more to ride.

user_height = float(input("Please provide your height in centimeters: "))

if user_height > 145:
    print("Cool! You are tall enough to ride. Enjoy!")
else:
    print("Sorry... you need to grow some more to ride :(")