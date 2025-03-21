# Hello World.
print("Hello World")

# Printing Text.
print("My favorite quote is \"To be or not to be.\"")
print('My favorite quote is "To be or not to be."')

# Code Errors.
print("Can someone please add a closing parenthesis?")

# Comments.

# Variable Declaration.
message = "This string is stored in a variable."
print(message)
print(message)

# Variable Naming
capital_of_spain = "Spain"
capital_of_france = "Paris"
capital_of_germany = "Berlin"

print(capital_of_spain)
print(capital_of_france)
print(capital_of_germany)

# Naming Conventions
python_creation_date = "February, 1991"
java_creation_date = "May, 1995"
javascript_creation_date = "December, 1995"

print(python_creation_date)
print(java_creation_date)
print(javascript_creation_date)

# Reassigning Variables
message = "The first message"
print(message)
message = "The second message"
print(message)
message = "The third message"
print(message)

# Multiple Assignments
msg1, msg2 = "World", "Hello"
msg1, msg2 = msg2, msg1
msg3, msg4, msg5 = "Name", "Is", "My"
msg3, msg4, msg5 = msg5, msg3, msg4

print(msg1)
print(msg2)
print(msg3)
print(msg4)
print(msg5)

# Variable Types
age = 25            # integer
temperature = 98.6  # floating-point number
is_true = True      # boolean
name = "Alejandro"  # string
my_list = [1, 2, 3] # list

print(type(age))
print(type(temperature))
print(type(is_true))
print(type(name))
print(type(my_list))

# Dynamic Typing
variable = 10         # int type
variable = "Hello"    # str type
variable = [1, 2, 3]  # list type

# Type Casting
variable = 10.9
print(int(variable))   # returns 10
pi = 3.141592
pi = int(pi)
print(pi)

# Type Errors
message = "Hello"
message = int(message)  # gives an error

# Empty Variable
var = None    # like null, but in Python

# Arithmetic Operators
x, y = 3, 6
print(x + y)  # Output: 9
print(x - y)  # Output: -3
print(x * y)  # Output: 18
print(x / y)  # Output: 0.5

# More Operators
x, y = 7, 2
# Floor Division // Divides the first operand by the second and rounds down the result to an integer
print(x // y)   # Output: 3 (7 divided by 2 is 3.5, rounded down is 3)

# Modulus % Returns the remainder of the division of the first operand by the second
print(x % y)    # Output: 1 (7 divided by 2 is 3, with a remainder of 1)

# Exponentiation ** Raises the first operand to the power of the second operand
print (x ** y)  # Output: 49 ( 7 raised to the power of 2 is 49, 7*7 = 49)