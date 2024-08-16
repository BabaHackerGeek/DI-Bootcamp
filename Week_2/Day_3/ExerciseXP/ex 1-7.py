# 🌟 Exercise 1: Currencies
# Instructions:
# 1. Create a class called `Currency` with the following attributes:
#    - `currency`: A string representing the currency type (e.g., 'dollar', 'euro').
#    - `amount`: An integer representing the amount of currency.
#
# 2. Implement the following methods and dunder methods:
#    - `__str__`: Returns a string representation of the currency (e.g., "5 dollars").
#    - `__int__`: Returns the integer value of the amount.
#    - `__repr__`: Returns a string representation of the currency (same as `__str__`).
#    - `__add__`: Allows adding an integer to the currency amount or adding two `Currency` objects with the same currency type.
#      If the currency types differ, raise a `TypeError`.
#    - `__iadd__`: Allows in-place addition (using `+=`) for both integers and `Currency` objects.

# Step 1: Define the Currency class with currency and amount attributes
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # Step 2: Implement the __str__ method to return a string representation of the currency
    def __str__(self):
        return f"{self.amount} {self.currency}s"

    # Step 3: Implement the __int__ method to return the integer value of the amount
    def __int__(self):
        return self.amount

    # Step 4: Implement the __repr__ method, same as __str__
    def __repr__(self):
        return self.__str__()

    # Step 5: Implement the __add__ method to allow adding currency amounts or integers
    def __add__(self, other):
        if isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                return Currency(self.currency, self.amount + other.amount)
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            return NotImplemented

    # Step 6: Implement the __iadd__ method to allow in-place addition with +=
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            raise TypeError("Unsupported operation")
        return self

# Step 7: Example usage of the Currency class
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))  # Output: '5 dollars'
print(int(c1))  # Output: 5
print(repr(c1))  # Output: '5 dollars'
print(c1 + 5)  # Output: 10 dollars
print(c1 + c2)  # Output: 15 dollars
print(c1)  # Output: 5 dollars
c1 += 5
print(c1)  # Output: 10 dollars
c1 += c2
print(c1)  # Output: 20 dollars
try:
    print(c1 + c3)  # Raises TypeError
except TypeError as e:
    print(e)


# 🌟 Exercise 2: Import
# Instructions:
# 1. Create a function in a file named `func.py` that sums 2 numbers and prints the result.
# 2. In a separate file named `exercise_one.py`, import the function from `func.py`.
# 3. Call the imported function and print the result.
# 4. Explore different ways to import the function, such as:
#    - `import module_name`
#    - `from module_name import function_name`
#    - `from module_name import function_name as fn`
#    - `import module_name as mn`

# Step 1: Define the sum_numbers function that adds two numbers
def sum_numbers(a, b):
    return a + b

# Step 2: Call the function and print the result
result = sum_numbers(3, 4)
print(result)  # Output: 7


# 🌟 Exercise 3: String module
# Instructions:
# 1. Generate a random string of length 5.
# 2. The string should contain only uppercase and lowercase letters (no numbers or special symbols).
# 3. Hint: Use the `string` module.

# Step 1: Import the string and random modules
import string
import random

# Step 2: Define a function to generate a random string of a given length
def generate_random_string(length=5):
    letters = string.ascii_letters  # Contains both uppercase and lowercase letters
    return ''.join(random.choice(letters) for _ in range(length))

# Step 3: Generate and print the random string
random_string = generate_random_string()
print(random_string)  # Output: Random string of length 5, e.g., 'aBcDe'


# 🌟 Exercise 4: Current Date
# Instructions:
# 1. Create a function that displays the current date.
# 2. Hint: Use the `datetime` module.

# Step 1: Import the datetime module
from datetime import datetime

# Step 2: Define a function to display the current date
def display_current_date():
    current_date = datetime.now().date()
    print(f"Today's date is: {current_date}")

# Step 3: Call the function to print today's date
display_current_date()  # Output: Today's date is: YYYY-MM-DD


# 🌟 Exercise 5: Amount of time left until January 1st
# Instructions:
# 1. Create a function that displays the amount of time left from now until January 1st.
#    - Example: "The 1st of January is in 10 days and 10:34:01 hours."
# 2. Hint: Use the `datetime` module to calculate the time difference.

# Step 1: Import the datetime module
from datetime import datetime

# Step 2: Define a function to calculate and display the time left until January 1st
def time_until_new_year():
    now = datetime.now()
    next_year = now.year + 1
    new_year = datetime(year=next_year, month=1, day=1)
    time_left = new_year - now
    days = time_left.days
    seconds = time_left.seconds
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    print(f"The 1st of January is in {days} days and {hours}:{minutes}:{seconds} hours.")

# Step 3: Call the function to display the time left
time_until_new_year()  # Output: The 1st of January is in X days and HH:MM:SS hours.


# 🌟 Exercise 6: Birthday and minutes
# Instructions:
# 1. Create a function that accepts a birthdate as an argument (in any format of your choice).
# 2. The function should display a message stating how many minutes the user has lived up to the current date.
# 3. Hint: Use the `datetime` module to calculate the difference in time.

# Step 1: Import the datetime module
from datetime import datetime

# Step 2: Define a function to calculate and display the number of minutes lived
def minutes_lived(birthdate_str):
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.now()
    time_lived = now - birthdate
    minutes = int(time_lived.total_seconds() / 60)
    print(f"You have lived for {minutes} minutes.")

# Step 3: Call the function with a sample birthdate
minutes_lived("1990-01-01")  # Output: You have lived for X minutes.


# 🌟 Exercise 7: Faker Module
# Instructions:
# 1. Install the `faker` module and review the documentation to learn how to use it.
# 2. Create an empty list called `users`. This list should hold dictionaries representing users.
# 3. Create a function that adds new dictionaries to the `users` list.
#    - Each user dictionary should have the following keys: `name`, `address`, `language_code`.
#    - Use `faker` to populate the values for these keys with fake data.

# Step 1: Import the Faker module
from faker import Faker

# Step 2: Create a Faker instance
fake = Faker()

# Step 3: Define a function to add a user to the users list
def add_user(users_list):
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users_list.append(user)

# Step 4: Create an empty list to hold users
users = []

# Step 5: Add multiple users to the list using a loop
for _ in range(5):
    add_user(users)

# Step 6: Print the list of users
for user in users:
    print(user)
# Output: Prints a list of 5 user dictionaries with fake data for `name`, `address`, and `language_code`.
