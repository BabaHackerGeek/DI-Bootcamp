#🌟 Exercise 1 : Convert lists into dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# Step 1: Define the lists
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Step 2: Use the zip function to combine keys and values
zipped_lists = zip(keys, values)

# Step 3: Convert the zipped object into a dictionary
dictionary = dict(zipped_lists)

# Step 4: Print the resulting dictionary
print(dictionary)  


#🌟 Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
#
# Given the following object:
#
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#
# How much does each family member have to pay ?
#
# Print out the family’s total cost for the movies.
#
# Bonus: Ask the user to input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# Step 1: Define the family dictionary
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

# Step 2: Initialize the total cost to 0
total_cost = 0

# Step 3: Loop through the family dictionary to calculate the cost for each member
for member, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    print(f"{member.capitalize()} has to pay ${ticket_price}.")
    total_cost += ticket_price

# Step 4: Print out the family's total cost for the movies
print(f"The family's total cost for the movies is: ${total_cost}")

# Bonus: Ask the user to input the names and ages instead of using the provided family variable

# Step 5: Initialize an empty dictionary for the family
user_family = {}

# Step 6: Ask the user for the number of family members
num_members = int(input("Enter the number of family members: "))

# Step 7: Loop to get the names and ages from the user
for _ in range(num_members):
    name = input("Enter the name of the family member: ")
    age = int(input(f"Enter the age of {name}: "))
    user_family[name] = age

# Step 8: Initialize the total cost to 0 for the user input family
user_total_cost = 0

# Step 9: Loop through the user_family dictionary to calculate the cost for each member
for member, age in user_family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    print(f"{member.capitalize()} has to pay ${ticket_price}.")
    user_total_cost += ticket_price

# Step 10: Print out the user family's total cost for the movies
print(f"The user family's total cost for the movies is: ${user_total_cost}")


#🌟 Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green
#
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#    The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:
#     creation_date: 1975 
#     number_stores: 10 000
# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

# Step 1: Create the dictionary
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

# Step 2: Change the number of stores to 2
brand['number_stores'] = 2

# Step 3: Print a sentence that explains who Zara's clients are
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")

# Step 4: Add a key called country_creation with a value of Spain
brand['country_creation'] = 'Spain'

# Step 5: Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

# Step 6: Delete the information about the date of creation
del brand['creation_date']

# Step 7: Print the last international competitor
print(f"The last international competitor is {brand['international_competitors'][-1]}.")

# Step 8: Print the major clothes colors in the US
print(f"The major clothes colors in the US are {', '.join(brand['major_color']['US'])}.")

# Step 9: Print the amount of key value pairs (ie. length of the dictionary)
print(f"The dictionary has {len(brand)} key-value pairs.")

# Step 10: Print the keys of the dictionary
print(f"The keys of the dictionary are: {list(brand.keys())}")

# Step 11: Create another dictionary called more_on_zara
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

# Step 12: Use a method to add the information from the dictionary more_on_zara to the dictionary brand
brand.update(more_on_zara)

# Step 13: Print the value of the key number_stores. What just happened?
print(f"The number of stores is now {brand['number_stores']}.")
# The number of stores was updated from the original 2 to the value in the more_on_zara dictionary, which is 10000.


#🌟 Exercise 4 : Disney characters
# Instructions
# Use this list :
#
# users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
# Analyse these results :
#
# #1/
#
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#
# #2/
#
# >>> print(disney_users_B)
# {0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
#
# #3/ 
#
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
#
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

# Step 1: Define the list of users
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Step 2: Use a for loop to recreate the 1st result
disney_users_A = {}
for index, user in enumerate(users):
    disney_users_A[user] = index
print(disney_users_A)  # Output: {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# Step 3: Use a for loop to recreate the 2nd result
disney_users_B = {}
for index, user in enumerate(users):
    disney_users_B[index] = user
print(disney_users_B)  # Output: {0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# Step 4: Use a method to recreate the 3rd result
sorted_users = sorted(users)
disney_users_C = {user: index for index, user in enumerate(sorted_users)}
print(disney_users_C)  # Output: {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# Step 5: Only recreate the 1st result for characters which names contain the letter "i"
disney_users_i = {user: index for index, user in enumerate(users) if "i" in user.lower()}
print(disney_users_i)  # Output: {"Mickey": 0, "Minnie": 1, "Ariel": 3}

# Step 6: Only recreate the 1st result for characters which names start with the letter "m" or "p"
disney_users_mp = {user: index for index, user in enumerate(users) if user.lower().startswith(('m', 'p'))}
print(disney_users_mp)  # Output: {"Mickey": 0, "Minnie": 1, "Pluto": 4}
