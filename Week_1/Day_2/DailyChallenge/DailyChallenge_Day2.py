# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples
#
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
#
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
#
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

# Prompt the user to enter a number
print ("Please enter a number : ")
number = int(input())

# Prompt the user to enter a length
print ("Please enter a length : ")
length = int(input())

# Generate and print the list of multiples
print ([number * i for i in range(1, length + 1)])


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
#
# user's word : "ppoeemm" ➞ "poem"
#
# user's word : "wiiiinnnnd" ➞ "wind"
#
# user's word : "ttiiitllleeee" ➞ "title"
#
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

print("Please enter a word: ")

word = input()

# Remove consecutive duplicate letters
result = ""
for char in word:
    if len(result) == 0 or char != result[-1]:
        result += char

print(result)

