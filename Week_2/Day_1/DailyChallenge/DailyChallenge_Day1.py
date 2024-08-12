# Instructions : Old MacDonald’s Farm
# Create a class called Farm that models a farm as described in the instructions.
# The class should have an __init__ method to initialize the farm with a name and a way to store animals.
# The class should have methods to add animals, retrieve farm information, and handle special cases.

# Step 1: Define the Farm class
class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    # Step 2: Define the add_animal method
    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    # Step 3: Define the get_info method
    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            farm_info += f"{animal} : {count}\n"
        farm_info += "\n    E-I-E-I-0!"
        return farm_info

    # Step 4: Define the get_animal_types method (bonus)
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Step 5: Define the get_short_info method (bonus)
    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = ', '.join([f"{animal}s" if self.animals[animal] > 1 else animal for animal in animal_types])
        return f"{self.name}'s farm has {animal_list}."

# Step 6: Create an instance of the Farm class and test the methods
macdonald = Farm("McDonald")

# Adding animals
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Print farm information
print(macdonald.get_info())

# Print animal types
print(macdonald.get_animal_types())

# Print short info about the farm
print(macdonald.get_short_info())
