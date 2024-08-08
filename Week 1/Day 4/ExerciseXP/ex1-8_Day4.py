# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# Step 1: Define the function display_message
def display_message():
    print("I am learning Python programming in this course.")

# Step 2: Call the function to display the message
display_message()


# 🌟 Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# Step 1: Define the function favorite_book with one parameter called title
def favorite_book(title):
    print(f"One of my favorite books is {title}")

# Step 2: Call the function and include a book title as an argument
favorite_book("Harry Potter")


# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# Step 1: Define the function describe_city with default value for the country parameter
def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}")

# Step 2: Call the function with a specific city and the default country
describe_city("Reykjavik")

# Step 3: Call the function with a specific city and a specified country
describe_city("Paris", "France")

# Step 4: Call the function with another specific city and a specified country
describe_city("Tokyo", "Japan")


# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. 
# Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

# Step 1: Define the function that accepts a number and generates a random number
def compare_numbers(user_number):
    # Step 2: Generate a random number between 1 and 100
    random_number = random.randint(1, 100)
    # Step 3: Compare the user number with the random number
    if user_number == random_number:
        print("Success! Both numbers are the same.")
    else:
        print(f"Fail. Your number was {user_number} and the random number was {random_number}.")

# Step 4: Get a number between 1 and 100 from the user
user_input = int(input("Enter a number between 1 and 100: "))

# Step 5: Call the function with the user input
compare_numbers(user_input)


# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().
#
# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.
#
# Bonus: Call the function make_shirt() using keyword arguments.

# Step 1: Define the function make_shirt
def make_shirt(size="large", text="I love NY city"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

# Step 2: Call the function to make a large shirt with the default message
make_shirt()

# Step 3: Call the function to make a medium shirt with the default message
make_shirt(size="medium")

# Step 4: Call the function to make a shirt of any size with a different message
make_shirt(size="small", text="Israeli Intelligence Corps unit 8200")

# Bonus: Call the function using keyword arguments
make_shirt(text="Python is really easy", size="extra large")


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names
#
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

# Step 1: Define the list of magician's names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Step 2: Define the function show_magicians
def show_magicians(names):
    for name in names:
        print(name)

# Step 3: Define the function make_great
def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

# Step 4: Call the function make_great to modify the list
make_great(magician_names)

# Step 5: Call the function show_magicians to see the modified list
show_magicians(magician_names)


# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.
#
# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
#
# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40
#
# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().
#
# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

import random

# Step 1: Define the get_random_temp function with season parameter
def get_random_temp(season):
    if season == 'winter':
        return random.uniform(-10, 16)
    elif season == 'spring':
        return random.uniform(0, 23)
    elif season == 'summer':
        return random.uniform(16, 40)
    elif season == 'autumn' or season == 'fall':
        return random.uniform(0, 24)
    else:
        return random.uniform(-10, 40)  # Default case if the season is not recognized

# Step 2: Define the main function
def main():
    # Ask the user for the season
    season = input("Please enter the season (winter, spring, summer, autumn): ").lower()
    
    # Get a random temperature based on the season
    temp = get_random_temp(season)
    
    # Inform the user of the temperature
    print(f"The temperature right now is {temp:.2f} degrees Celsius.")
    
    # Provide friendly advice based on the temperature
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 23:
        print("It's a bit cool, dress comfortably.")
    elif 24 <= temp < 32:
        print("The weather is warm, a perfect day to go outside.")
    elif 32 <= temp <= 40:
        print("It's quite hot, stay hydrated!")
    else:
        print("Temperature is outside the expected range.")

# Step 3: Call the main function
main()

# Bonus: Determine the season according to the month
def get_season_by_month(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'
    else:
        return None

def main_with_month():
    # Ask the user for the month
    month = int(input("Please enter the number of the month (1-12): "))
    season = get_season_by_month(month)
    
    if season:
        # Get a random temperature based on the season
        temp = get_random_temp(season)
        
        # Inform the user of the temperature
        print(f"The temperature right now is {temp:.2f} degrees Celsius.")
        
        # Provide friendly advice based on the temperature
        if temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temp < 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 16 <= temp < 23:
            print("It's a bit cool, dress comfortably.")
        elif 24 <= temp < 32:
            print("The weather is warm, a perfect day to go outside.")
        elif 32 <= temp <= 40:
            print("It's quite hot, stay hydrated!")
        else:
            print("Temperature is outside the expected range.")
    else:
        print("Invalid month entered.")

# Step 4: Call the main function with month
main_with_month()


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.
#
# Here is an array of dictionaries, containing those questions and answers
#
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
#
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more than 3 wrong answers, ask him to play again.

# Step 1: Define the list of questions and answers
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# Step 2: Define the function to ask questions and track answers
def ask_questions():
    correct_answers = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.lower() == item["answer"].lower():
            correct_answers += 1
        else:
            wrong_answers.append({
                "question": item["question"],
                "user_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct_answers, wrong_answers

# Step 3: Define the function to inform the user of their score and display incorrect answers if any
def display_results(correct_answers, wrong_answers):
    total_questions = len(data)
    incorrect_answers = total_questions - correct_answers

    print(f"\nYou got {correct_answers} out of {total_questions} correct.")
    print(f"You got {incorrect_answers} wrong.")

    if incorrect_answers > 0:
        print("\nHere are the questions you got wrong:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['user_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")

    if incorrect_answers > 3:
        print("You had more than 3 wrong answers. Would you like to play again? (yes/no)")
        play_again = input().lower()
        if play_again == "yes":
            main()

# Step 4: Define the main function to run the quiz
def main():
    correct_answers, wrong_answers = ask_questions()
    display_results(correct_answers, wrong_answers)

# Step 5: Call the main function to start the quiz
main()

