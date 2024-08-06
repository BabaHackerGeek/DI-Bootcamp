#Exercise 7 : Odd Or Even
#Instructions
#Write code that asks the user for a number and determines whether this number is odd or even.

user_number = int(input("Please provide a number: "))

if user_number % 2 == 0:
    print("You entered an even number")
else:
    print("You entered an odd number")
