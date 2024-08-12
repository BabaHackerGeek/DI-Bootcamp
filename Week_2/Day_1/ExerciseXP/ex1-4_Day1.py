# 🌟 Exercise 1: Cats
# Instructions
# Using this class
#
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
#
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# Step 1: Define the Cat class
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 2: Define the function to get a cat's age
def get_cat_age(cat):
    return cat.age

# Step 3: Create a function to find the oldest cat
def find_oldest_cat(*cats):
    oldest_cat = max(cats, key=get_cat_age)
    return oldest_cat

# Step 4: Instantiate three Cat objects
cat1 = Cat("Whiskers", 5)
cat2 = Cat("Tom", 8)
cat3 = Cat("Felix", 3)

# Step 5: Use the function to find the oldest cat and print the result
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# Step 1: Define the Dog class
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    # Step 2: Define the bark method
    def bark(self):
        print(f"{self.name} goes woof!")

    # Step 3: Define the jump method
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

# Step 4: Create an object called davids_dog
davids_dog = Dog("Rex", 50)

# Step 5: Print the details of davids_dog and call the methods bark and jump
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

# Step 6: Create an object called sarahs_dog
sarahs_dog = Dog("Teacup", 20)

# Step 7: Print the details of sarahs_dog and call the methods bark and jump
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

# Step 8: Create an if statement to check which dog is bigger
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is the bigger dog.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is the bigger dog.")
else:
    print("Both dogs are the same size.")


# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
#
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
#
# Then, call the sing_me_a_song method. The output should be:
#
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# Step 1: Define the Song class
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    # Step 2: Define the sing_me_a_song method
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Step 3: Create an object of the Song class with the lyrics
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

# Step 4: Call the sing_me_a_song method
stairway.sing_me_a_song()


# 🌟 Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example
# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }
# Create a method called get_groups that prints the animal/animals inside each group.
# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

# Step 1: Define the Zoo class
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    # Step 2: Define the add_animal method
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    # Step 3: Define the get_animals method
    def get_animals(self):
        print(f"Animals in {self.name}: {', '.join(self.animals)}")

    # Step 4: Define the sell_animal method
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    # Step 5: Define the sort_animals method
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        current_group = []
        current_letter = sorted_animals[0][0] if sorted_animals else ""
        group_number = 1

        for animal in sorted_animals:
            if animal[0] == current_letter:
                current_group.append(animal)
            else:
                grouped_animals[group_number] = current_group
                group_number += 1
                current_letter = animal[0]
                current_group = [animal]

        grouped_animals[group_number] = current_group
        self.sorted_animals = grouped_animals

    # Step 6: Define the get_groups method
    def get_groups(self):
        for group_number, group in self.sorted_animals.items():
            print(f"Group {group_number}: {', '.join(group)}")

# Step 7: Create an object called ramat_gan_safari and call all the methods
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Add animals to the zoo
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

# Get the list of animals
ramat_gan_safari.get_animals()

# Sell an animal
ramat_gan_safari.sell_animal("Cougar")

# Get the updated list of animals
ramat_gan_safari.get_animals()

# Sort and group the animals
ramat_gan_safari.sort_animals()

# Get the groups of animals
ramat_gan_safari.get_groups()

