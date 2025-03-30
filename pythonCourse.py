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


# Shorthand Operators
count = 0
count = count + 1
count += 2
print(count) # Output: 3


# Boolean OR
a, b, c = False, False, True
print(a or b or c) # Output: True


# Boolean AND
a = True
b = False
print(a and b)  # Output: False


# Boolean Negation
a = True
b = False
print(not a)  # Output: False
print(not b)  # Output: True


# Introduction to Functions
def greet():
    print("Hello World!")

def say_goodbye():
    print("Goodbye!")


# Function Declaration
print(n)    # error because n is not defined yet
n = 10

print_number(5) # error because the function print_number is not defined yet
def print_number(n):
    print(n)


# Parameters
def greet(name):    # this function takes a parameter called name
    msg = "Hello, " + name
    print(msg)

greet("Alice")  # This function call has "Alice" as the argument


# Multiple Parameters
def greet(name, greeting):
    message = greeting + " " + name
    print(message)

greet("Alice", "Hello") # This will print "Hello Alice"


# Return Statement
def add(x, y):
    return x + y

result = add(3, 5)
print(result)   # This will print 8


# Type Hints
# to add a type hint for a parameter, you add a colon after the parameter 
# name and then the type of data you expect.
# to add a return type, you add a right arrow (->) after the closing
# parenthesis and then the type of data you expect to return (before
# the colon).
def add(x: int, y: int) -> int:
    return x + y


# Scope
n = 10
print(n)            # Output: 10

def print_number(n):
    print(n)

print_number(11)    # Output: 11

print(n)            # Output: 10


# Global vs Local Scope
# Local Scope
def declare_variable() -> None:
    inside_function_only = 10
    return

declare_variable()
print(inside_function_only)    # This will raise a NameError

# Global Scope
n = 10
def print_global_variable() -> None:
    print(n)

print_global_variable()        # This will print 10


# Default Arguments
def greet(name="world"):
    print("Hello, " + name + "!")
greet()         # This will print "Hello, world!"
greet("Bob")    # This will print "Hello, Bob!"

# This is valid
def greet(greeting="Hello", name="world"):
    print(greeting + ", " + name + "!")

# This is valid
def greet(greeting, name="world"):
    print(greeting + ", " + name + "!")

# This is NOT valid
# If the first one is optional, then the 2nd one must be ALSO optional
def greet(greeting="Hello", name):
    print(greeting + ", " + name + "!")


# Comparison Operators
x, y = 3, 5
print(x == y)   # Output: False


# If Statements
account_balance = -100
if account_balance < 0:
    print("Your account is overdrawn.")

print("This is always printed.")


# If Statement Scope
# A conditional statement does not create its own scope
if True:
    message = "Hello"

print(message)  # This will print "Hello"


# If-Else Statements
balance = 100
if balance < 10:
    print("Account is overdrawn.")
else:
    print("Account is in good standing.")


# Else-If Statements
balance = 1000
if balance < 0:
    print("Your account is overdrawn")
elif balance == 0:
    print("Your account balance is zero.")
elif balance < 100:
    print("Your account balance is low.")
else:
    print("Your account balance is healthy.")   # This will execute


# Logic Condition
# or, and & not
balance = 500
if balance > 0 and balance < 1000:
    print("Balance is between 0 and 1000.")