# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:
# 1. Compute the circle’s area.
# 2. Print the attributes of the circle - use a dunder method.
# 3. Be able to add two circles together, and return a new circle with the new radius - use a dunder method.
# 4. Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method.
# 5. Be able to compare two circles and see if they are equal, and return a Boolean - use a dunder method.
# 6. Be able to put them in a list and sort them.
# Bonus (not mandatory): Install the Turtle module, and draw the sorted circles.

import math

# Step 1: Define the Circle class
class Circle:
    def __init__(self, radius=None, diameter=None):
        # Step 2: Initialize the Circle with either radius or diameter
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified")

    # Step 3: Define a method to calculate the area of the circle
    def area(self):
        return math.pi * (self.radius ** 2)

    # Step 4: Implement a dunder method to print the attributes of the circle
    def __str__(self):
        return f"Circle with radius: {self.radius:.2f} and diameter: {self.diameter:.2f}"

    # Step 5: Implement a dunder method to add two circles together and return a new circle
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    # Step 6: Implement a dunder method to compare two circles and return if one is bigger
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    # Step 7: Implement a dunder method to compare two circles and return if they are equal
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    # Step 8: Define a method to sort a list of circles by their radius
    @staticmethod
    def sort_circles(circles):
        return sorted(circles, key=lambda circle: circle.radius)

# Step 9: Example usage of the Circle class

# Create two circles
circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)

# Compute and print the area of circle1
print(f"Area of circle1: {circle1.area():.2f}")  # Output: Area of circle1: 78.54

# Print the attributes of circle2
print(circle2)  # Output: Circle with radius: 5.00 and diameter: 10.00

# Add two circles together
circle3 = circle1 + circle2
print(circle3)  # Output: Circle with radius: 10.00 and diameter: 20.00

# Compare two circles to see which is bigger
print(circle1 > circle2)  # Output: False

# Compare two circles to see if they are equal
print(circle1 == circle2)  # Output: True

# Sort a list of circles by their radius
circles = [Circle(radius=3), Circle(radius=7), Circle(radius=1)]
sorted_circles = Circle.sort_circles(circles)
for c in sorted_circles:
    print(c)  # Output: Circles sorted by radius: 1.00, 3.00, 7.00

# Bonus: Draw the sorted circles using the Turtle module (optional)
