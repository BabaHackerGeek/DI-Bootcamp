# 🌟 Anagram Checker
# The goal is to create a program that will check if a word is a valid English word and find all possible anagrams for that word.

# Instructions:
# 1. Create a new file called `anagram_checker.py` which contains a class called `AnagramChecker`.
# 2. The class should have the following methods:
#    - `__init__` - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
#    - `is_valid_word(word)` – should check if the given word (ie. the word of the user) is a valid word.
#    - `get_anagrams(word)` – should find all anagrams for the given word.
#    - Hint: you might want to create a separate method called `is_anagram(word1, word2)`, that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# 3. None of the methods in the class should print anything.
#
# 4. Now create another Python file, called `anagrams.py`.
#    - This will contain all the UI (user interface) functionality of your program, and will rely on `AnagramChecker` for the anagram-related logic.
#    - It should do the following:
#       - Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
#       - If the user chooses to input a word, validate the input:
#         - Only a single word is allowed.
#         - Only alphabetic characters are allowed.
#         - Whitespace should be removed from the start and end of the user’s input.
#       - Once valid, find and display all possible anagrams for the word using `AnagramChecker`.
#       - Display the information about the word in a user-friendly format.
    

# anagram_checker.py

# Step 1: Create the AnagramChecker class
class AnagramChecker:
    def __init__(self, wordlist_file):
        # Load the word list file into a set for quick lookup
        with open(wordlist_file, 'r') as file:
            self.words = set(file.read().splitlines())

    def is_valid_word(self, word):
        # Check if the word is in the word list
        return word.lower() in self.words

    def get_anagrams(self, word):
        # Find all anagrams for the given word
        word = word.lower()
        anagrams = [w for w in self.words if self.is_anagram(word, w) and w != word]
        return anagrams

    def is_anagram(self, word1, word2):
        # Check if two words are anagrams by comparing their sorted letters
        return sorted(word1) == sorted(word2)
