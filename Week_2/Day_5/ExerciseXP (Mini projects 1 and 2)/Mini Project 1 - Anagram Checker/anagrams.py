# anagrams.py

from anagram_checker import AnagramChecker

def get_user_input():
    # Get and validate user input
    user_input = input("Enter a word (or type 'exit' to quit): ").strip()
    
    # Check for exit condition
    if user_input.lower() == 'exit':
        return None

    # Validate input (single word, alphabetic only)
    if ' ' in user_input:
        print("Error: Please enter only one word.")
        return get_user_input()

    if not user_input.isalpha():
        print("Error: Please enter a word with alphabetic characters only.")
        return get_user_input()

    return user_input

def main():
    # Create an instance of AnagramChecker
    anagram_checker = AnagramChecker('wordlist.txt')

    while True:
        word = get_user_input()

        if word is None:
            break

        # Check if the word is valid
        if not anagram_checker.is_valid_word(word):
            print(f"The word '{word}' is not a valid English word.")
        else:
            anagrams = anagram_checker.get_anagrams(word)
            print(f"YOUR WORD: \"{word.upper()}\"")
            print("This is a valid English word.")
            print(f"Anagrams for your word: {', '.join(anagrams)}")

if __name__ == "__main__":
    main()
