#🌟 Exercise 1 : Pets
#Instructions

#Using this code:

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Step 1: Create a new cat breed named Siamese which inherits from the Cat class
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Step 2: Create a list called all_cats, which holds three cat instances: one Bengal, one Chartreux, and one Siamese
all_cats = [
    Bengal("Simba", 3),
    Chartreux("Luna", 4),
    Siamese("Sassy", 2)
]

# Step 3: Create a variable called sara_pets, which is an instance of the Pet class, passing all_cats to it
sara_pets = Pets(all_cats)

# Step 4: Take all the cats for a walk, using the walk method
sara_pets.walk()


#🌟 Exercise 2 : Dogs
# Instructions:
# 1. Create a class called Dog with the following attributes: name, age, and weight.
#
# 2. Implement the following methods in the Dog class:
#    - bark: This method returns a string that states: "<dog_name> is barking".
#    - run_speed: This method calculates and returns the dog's running speed using the formula (weight/age*10).
#    - fight: This method takes a parameter that represents another Dog instance, called other_dog. The method
#             returns a string stating which dog won the fight. The winner should be the dog with the higher
#             run_speed multiplied by its weight.
#
# 3. Create 3 Dog instances and test the methods by running them through your class.

# Step 1: Define the Dog class
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    # Step 2: Implement the bark method
    def bark(self):
        return f"{self.name} is barking"

    # Step 3: Implement the run_speed method
    def run_speed(self):
        return (self.weight / self.age) * 10

    # Step 4: Implement the fight method
    def fight(self, other_dog):
        # Calculate the strength of both dogs
        self_strength = self.run_speed() * self.weight
        other_dog_strength = other_dog.run_speed() * other_dog.weight

        # Determine the winner
        if self_strength > other_dog_strength:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_strength < other_dog_strength:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return "It's a tie!"

# Step 5: Create 3 Dog instances
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Max", 4, 25)

# Step 6: Test the methods
print(dog1.bark())  # Rex is barking
print(dog2.run_speed())  # Outputs the running speed of Buddy
print(dog3.fight(dog1))  # Outputs the result of the fight between Max and Rex
print(dog2.fight(dog3))  # Outputs the result of the fight between Buddy and Max


#🌟 Exercise 3 : Dogs Domesticated
# Instructions:
# 1. Create a new Python file and import your Dog class from the previous exercise.
#
# 2. In the new Python file, create a class named PetDog that inherits from Dog.
#
# 3. Add an attribute called trained to the __init__ method, this attribute should be a boolean
#    and its value should be False by default.
#
# 4. Add the following methods to the PetDog class:
#    - train: This method should print the output of the bark method and switch the trained
#             boolean attribute to True.
#
#    - play: This method takes a parameter that can accept a few names of other Dog instances
#            (use *args). The method should print the following string: "dog_names all play together".
#
#    - do_a_trick: If the dog is trained, this method should print one of the following sentences
#                  at random:
#      - "dog_name does a barrel roll".
#      - "dog_name stands on his back legs".
#      - "dog_name shakes your hand".
#      - "dog_name plays dead".

import random
from dog import Dog  # Assuming your Dog class is in a file named dog.py

# Step 2: Define the PetDog class that inherits from Dog
class PetDog(Dog):
    def __init__(self, name, age, weight):
        # Call the parent class's __init__ method
        super().__init__(name, age, weight)
        # Step 3: Add the trained attribute, defaulting to False
        self.trained = False

    # Step 4: Implement the train method
    def train(self):
        print(self.bark())
        self.trained = True

    # Step 4: Implement the play method
    def play(self, *args):
        dog_names = ", ".join([dog.name for dog in args] + [self.name])
        print(f"{dog_names} all play together")

    # Step 4: Implement the do_a_trick method
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))

# Step 5: Create instances of PetDog and test the methods
dog1 = PetDog("Buddy", 5, 30)
dog2 = PetDog("Max", 3, 20)
dog3 = PetDog("Rocky", 4, 40)

# Train the dog and check the trained status
dog1.train()

# Play with other dogs
dog1.play(dog2, dog3)

# Perform a trick if trained
dog1.do_a_trick()
dog2.do_a_trick()  # This will not print anything since dog2 is not trained


# Exercise 4 : Family
# Instructions:
# 1. Create a class called Family with the following attributes:
#    - members: a list of dictionaries, where each dictionary contains details about a family member.
#    - last_name: a string representing the family's last name.
#
# 2. Implement the following methods:
#    - born: This method adds a new child to the members list using **kwargs to pass in the child's details.
#            The method should print a message congratulating the family on the new child.
#
#    - is_18: This method takes the name of a family member as a parameter and returns True if they are
#             over 18 years old, and False otherwise.
#
#    - family_presentation: This method prints the family's last name and the details of all the members.
#
# 3. Create an instance of the Family class with the last name of your choice, including the following members:
#    - {'name':'Michael','age':35,'gender':'Male','is_child':False}
#    - {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#
# 4. Call all the methods you created in Point 2.

# Step 1: Define the Family class
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    # Step 2: Implement the born method
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    # Step 2: Implement the is_18 method
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  # Return False if the member is not found

    # Step 2: Implement the family_presentation method
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

# Step 3: Create an instance of the Family class with the given members
family_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

my_family = Family(last_name="Smith", members=family_members)

# Step 4: Call the born method to add a new child
my_family.born(name="John", age=0, gender="Male", is_child=True)

# Step 4: Call the is_18 method to check if a member is over 18
print(my_family.is_18("Michael"))  # Output: True
print(my_family.is_18("John"))     # Output: False

# Step 4: Call the family_presentation method to print the family's details
my_family.family_presentation()


# Exercise 5 : TheIncredibles Family
# Instructions:
# 1. Create a class called TheIncredibles that inherits from the Family class.
#    - The members attribute should be a list of dictionaries containing additional keys: power and incredible_name.
#
# 2. Add a method called use_power:
#    - This method should print the power of a member only if they are over 18 years old.
#    - If the member is not over 18 years old, raise an exception stating they are not over 18 years old.
#
# 3. Add a method called incredible_presentation:
#    - This method should print a sentence like “*Here is our powerful family**”.
#    - It should then print the family’s last name and all the members’ details by using the super() function to call
#      the family_presentation method.
#
# 4. Create an instance of the Incredibles class with the “Incredibles” last name, and the following members:
#    - {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'}
#    - {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#
# 5. Call the incredible_presentation method.
#
# 6. Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
#
# 7. Call the incredible_presentation method again.

# Assuming the Family class is already defined as in the previous exercise

# Step 1: Define TheIncredibles class that inherits from Family
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    # Step 2: Add the use_power method
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['incredible_name']} uses their power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")
    
    # Step 3: Add the incredible_presentation method
    def incredible_presentation(self):
        print("*Here is our powerful family**")
        super().family_presentation()

# Step 4: Create an instance of TheIncredibles class
incredible_family_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredible_family = TheIncredibles(last_name="Incredibles", members=incredible_family_members)

# Step 5: Call the incredible_presentation method
incredible_family.incredible_presentation()

# Step 6: Use the born method to add Baby Jack with power "Unknown Power"
incredible_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="Jack-Jack")

# Step 7: Call the incredible_presentation method again
incredible_family.incredible_presentation()

# Optional: Demonstrate using powers
try:
    incredible_family.use_power("Michael")  # Should succeed
    incredible_family.use_power("Baby Jack")  # Should raise an exception
except Exception as e:
    print(e)
