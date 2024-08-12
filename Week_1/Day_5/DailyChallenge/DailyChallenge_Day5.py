# Step 1: Accept a comma-separated sequence of words as input
input_sequence = input("Enter a comma-separated sequence of words: ")

# Step 2: Split the input string into a list of words
words = [word.strip() for word in input_sequence.split(",")]

# Step 3: Sort the list of words alphabetically
sorted_words = sorted(words)

# Step 4: Join the sorted words back into a comma-separated sequence
output_sequence = ",".join(sorted_words)

# Step 5: Print the sorted sequence
print(output_sequence)


# Step 1: Define the function to find the longest word in a sentence
def longest_word(sentence):
    # Step 2: Split the sentence into words
    words = sentence.split()
    
    # Step 3: Use max() to find the longest word
    longest = max(words, key=len)
    
    # Step 4: Return the longest word
    return longest

# Test cases
print(longest_word("Margaret's toy is a pretty doll."))  # Output: "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))  # Output: "forever."
print(longest_word("Forgetfulness is by all means powerless!"))  # Output: "Forgetfulness"

