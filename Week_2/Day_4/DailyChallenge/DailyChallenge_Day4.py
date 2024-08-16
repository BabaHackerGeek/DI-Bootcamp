# The goal of the exercise is to create a class that will help you analyze a specific text. 
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I: Analyze a simple string

# Step 1: Create a class called Text that takes a string as an argument and store the text in an attribute.
class Text:
    def __init__(self, content):
        self.content = content

    # Step 2: Implement a method to return the frequency of a word in the text.
    def word_frequency(self, word):
        words = self.content.lower().split()
        frequency = words.count(word.lower())
        if frequency:
            return f"The word '{word}' appears {frequency} time(s) in the text."
        else:
            return f"The word '{word}' does not appear in the text."

    # Step 3: Implement a method that returns the most common word in the text.
    def most_common_word(self):
        words = self.content.lower().split()
        word_freq = {word: words.count(word) for word in set(words)}
        most_common = max(word_freq, key=word_freq.get)
        return f"The most common word is '{most_common}' which appears {word_freq[most_common]} time(s)."

    # Step 4: Implement a method that returns a list of all the unique words in the text.
    def unique_words(self):
        words = self.content.lower().split()
        unique_words = list(set(words))
        return unique_words

# Example usage:
text_content = "A good book would sometimes cost as much as a good house."
text_analysis = Text(text_content)

print(text_analysis.word_frequency("good"))  # Output: The word 'good' appears 2 time(s) in the text.
print(text_analysis.most_common_word())      # Output: The most common word is 'a' which appears 2 time(s).
print(text_analysis.unique_words())          # Output: ['sometimes', 'house.', 'book', 'cost', 'a', 'good', 'as', 'much', 'would']

# Part II: Analyze a text from an external file

# Step 5: Implement a class method that returns a Text instance from a text file.
class Text:
    def __init__(self, content):
        self.content = content

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            content = file.read()
        return cls(content)

    # Step 2: Implement a method to return the frequency of a word in the text.
    def word_frequency(self, word):
        words = self.content.lower().split()
        frequency = words.count(word.lower())
        if frequency:
            return f"The word '{word}' appears {frequency} time(s) in the text."
        else:
            return f"The word '{word}' does not appear in the text."

    # Step 3: Implement a method that returns the most common word in the text.
    def most_common_word(self):
        words = self.content.lower().split()
        word_freq = {word: words.count(word) for word in set(words)}
        most_common = max(word_freq, key=word_freq.get)
        return f"The most common word is '{most_common}' which appears {word_freq[most_common]} time(s)."

    # Step 4: Implement a method that returns a list of all the unique words in the text.
    def unique_words(self):
        words = self.content.lower().split()
        unique_words = list(set(words))
        return unique_words

# Example usage:
text_analysis_from_file = Text.from_file('the_stranger.txt')

print(text_analysis_from_file.word_frequency("the"))  # Output: Frequency of the word 'the' in the text.
print(text_analysis_from_file.most_common_word())     # Output: The most common word in the text.
print(text_analysis_from_file.unique_words())         # Output: List of unique words in the text.

# Bonus: Implement a TextModification class that inherits from Text

import string
from nltk.corpus import stopwords

class TextModification(Text):
    # Step 1: Implement a method that returns the text without any punctuation.
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.content.translate(translator)

    # Step 2: Implement a method that returns the text without any English stop-words.
    def remove_stopwords(self):
        words = self.content.split()
        stop_words = set(stopwords.words('english'))
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)

    # Step 3: Implement a method that returns the text without any special characters.
    def remove_special_characters(self):
        filtered_text = ''.join(e for e in self.content if e.isalnum() or e.isspace())
        return filtered_text

# Example usage:
text_modification = TextModification.from_file('the_stranger.txt')

print(text_modification.remove_punctuation())  # Output: Text without punctuation
print(text_modification.remove_stopwords())    # Output: Text without stopwords
print(text_modification.remove_special_characters())  # Output: Text without special characters
