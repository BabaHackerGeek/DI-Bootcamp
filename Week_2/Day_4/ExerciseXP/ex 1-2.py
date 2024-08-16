# 🌟 Exercise 1 – Random Sentence Generator
# Description: In this exercise, we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.
#
# Hint: The generated sentences do not have to make sense.
#
# 1. Download the word list and save it in your development directory.
#
# 2. Create a function called `get_words_from_file`. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
#
# 3. Create another function called `get_random_sentence` which takes a single parameter called `length`. The `length` parameter will be used to determine how many words the sentence should have. The function should:
#    - Use the words list to get your random words.
#    - The number of words should be the value of the `length` parameter.
#    - Take the random words and create a sentence (using a python method), the sentence should be lower case.
#
# 4. Create a function called `main` which will:
#    - Print a message explaining what the program does.
#    - Ask the user how long they want the sentence to be. Acceptable values are an integer between 2 and 20. Validate your data and test your validation!
#    - If the user inputs incorrect data, print an error message and end the program.
#    - If the user inputs correct data, run your code.

import random
import os

# Step 2: Define a function to read words from a file and return them as a list
def get_words_from_file(file_path):
    # Check if the file exists before trying to open it
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return []
    
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

# Step 3: Define a function to generate a random sentence of a given length
def get_random_sentence(length):
    # Use the correct path to the words.txt file
    words = get_words_from_file('words.txt')
    if not words:
        return "Error: Could not retrieve words from file."
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

# Step 4: Define the main function to interact with the user
def main():
    print("This program generates a random sentence based on the length you provide.")
    
    try:
        length = int(input("How long do you want the sentence to be? (Enter a number between 2 and 20): "))
        if length < 2 or length > 20:
            print("Error: The number must be between 2 and 20.")
            return
    except ValueError:
        print("Error: Please enter a valid integer.")
        return

    random_sentence = get_random_sentence(length)
    print(f"Here is your random sentence: {random_sentence}")

# Call the main function
if __name__ == "__main__":
    main()
