# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#
# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples
#
# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
#
# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
#
# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


# Step 1: Ask a user for a word
word = input("Please enter a word: ")

# Step 2: Create an empty dictionary to store the indexes
letter_indices = {}

# Step 3: Loop through the word to populate the dictionary
for index, letter in enumerate(word):
    if letter in letter_indices:
        letter_indices[letter].append(index)
    else:
        letter_indices[letter] = [index]

# Step 4: Print the resulting dictionary
print(letter_indices)


# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)
#
# Examples
#
# The key is the product, the value is the price
#
# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
#
# wallet = "$300"
#
# ➞ ["Bread", "Fertilizer", "Water"]
#
# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
#
# wallet = "$100" 
#
# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]
#
# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2
#
# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }
#
# wallet = "$1" 
#
# ➞ "Nothing"

# Step 1: Define a function to convert price strings to numbers
def convert_price(price_str):
    return float(price_str.replace('$', '').replace(',', ''))

# Step 2: Define the items and wallet amount
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Step 3: Convert wallet amount to a number
wallet_amount = convert_price(wallet)

# Step 4: Find affordable items
affordable_items = []
for item, price in items_purchase.items():
    if convert_price(price) <= wallet_amount:
        affordable_items.append(item)

# Step 5: Sort the list in alphabetical order
affordable_items.sort()

# Step 6: Print the result
if affordable_items:
    print(affordable_items)
else:
    print("Nothing")

