# Part 1: Quiz

# 1. What is a class?
# A class is a blueprint for creating objects in object-oriented programming (OOP). 
# It defines a set of attributes (variables) and methods (functions) that the objects 
# created from the class will have. In simple terms, a class is like a template that 
# outlines the properties and behaviors of the objects that belong to that class.

# 2. What is an instance?
# An instance is a specific object created from a class. When you create an object 
# from a class, that object is called an instance of the class. Each instance has its 
# own unique data but shares the structure and behavior defined by the class.

# 3. What is encapsulation?
# Encapsulation is an OOP principle where the data (attributes) and methods (functions) 
# are bundled together within a class. It also restricts direct access to some of the 
# object’s components, which means that the internal representation of an object is 
# hidden from the outside. Access to this data is controlled through public methods, 
# which are typically referred to as getters and setters.

# 4. What is abstraction?
# Abstraction is the concept of hiding the complex implementation details of a system 
# and exposing only the necessary parts to the user. In OOP, abstraction allows a class 
# to hide specific implementation details and show only essential features.

# 5. What is inheritance?
# Inheritance is an OOP principle where a new class (called the child or subclass) 
# derives properties and behaviors (attributes and methods) from an existing class 
# (called the parent or superclass). This allows the child class to inherit and reuse 
# code from the parent class while adding its own specific features.

# 6. What is multiple inheritance?
# Multiple inheritance is an OOP concept where a class can inherit properties and 
# behaviors from more than one parent class. This means a subclass can have multiple 
# superclasses, inheriting attributes and methods from all of them.

# 7. What is polymorphism?
# Polymorphism is an OOP concept where objects of different classes can be treated as 
# objects of a common superclass. It allows methods to be defined in a way that they 
# can operate on objects of different classes. Polymorphism is often implemented 
# through method overriding or method overloading.

# 8. What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which Python looks for a method or 
# attribute in a hierarchy of classes. MRO is especially important in the context of 
# multiple inheritance, where a class can inherit from multiple superclasses. The MRO 
# determines the order in which these classes are checked when a method is called.
# In Python, the MRO can be seen using the `.__mro__` attribute or the `mro()` method.
