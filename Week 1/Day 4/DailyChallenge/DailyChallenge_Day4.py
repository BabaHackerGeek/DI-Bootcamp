# Instructions
# Given a “Matrix” string:
#
#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!
#
# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:
#
# 7	i	i
# T	s	x
# h	%	?
# i		#
# s	M	
# $	a	
# #	t	%
# ^	r	!
#
# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string
#
# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column,
# selecting only the alpha characters and connecting them. Then he replaces every group of symbols 
# between two alpha characters by a space.
#
# Using his technique, try to decode this matrix.
#
# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message
#
# Hint (if needed) : Look at the remote learning “Matrix” videos

# Step 1: Define the matrix as a 2D list
matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

# Step 2: Initialize an empty string to store the decrypted message
decrypted_message = ""

# Step 3: Loop through each column
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        char = matrix[row][col]
        # Step 4: Check if the character is an alphabet
        if char.isalpha():
            decrypted_message += char
        else:
            # Step 5: If the last character added is not a space, add a space
            if len(decrypted_message) > 0 and decrypted_message[-1] != " ":
                decrypted_message += " "

# Step 6: Remove any trailing spaces from the message
decrypted_message = decrypted_message.strip()

# Step 7: Replace any consecutive spaces with a single space without using re
final_message = ""
space_found = False
for char in decrypted_message:
    if char == " ":
        if not space_found:
            final_message += char
            space_found = True
    else:
        final_message += char
        space_found = False

# Step 8: Print the decrypted message
print(final_message)

