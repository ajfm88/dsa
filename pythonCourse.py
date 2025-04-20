'''
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



# Truthy and Falsy
# It's possible to use non-Boolean values to execute conditional statements.
# Falsy values are False, None, 0, 0.0, "", [], most other empty collections.
msg = ""
if msg:
    print("Message is not empty.")  # This will not be printed

msg = "Hello World!"
if msg:
    print("Message is not empty.")  # This will be printed



# While Loops
i = 0
while i < 5:
    print("I love Python!")
    i += 1



#  While Loops Counting
n = 0
while n <= 9:
    print(n)
    n += 1



# While Loops Multiples
n = 10
while n <= 90:
    print(n)
    n += 10



# For Loops
n = 0
while n < 10:
    print(n)
    n += 1

for i in range(10):
    print(i)



# For Loops Start
i = 2
while i < 5:
    print(i)
    i += 1

for i in range (2, 5):
    print(i)



# For Loops Step
i = 0
while i < 10:
    print(i)
    i += 2
#          start, stop, step
for i in range(0, 10, 2):
    print(i)



# For Loops Reverse
i = 10
while i > 0:
    print(i)
    i -= 1

for i in range(10, 0, -1):
    print(i)



# Nested Loops
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)



# Control Flow
# break: exits the loop immeditely.
# continue: Skips the remaining code inside the loop for the current iteration and moves to the next iteration.
# pass: Acts as a placeholder and does nothing. We cannot have empty loops, so we use pass to avoid errors.
# It can also be used in conditional statements and functions.



# Length Function
my_str = "NeetCode"
print(len(my_str))  # Output: 8



# String Indexing
my_str = "Hello"
print(my_str[0])    # Output: H
print(my_str[1])    # Output: e
print(my_str[2])    # Output: l
print(my_str[3])    # Output: l
print(my_str[4])    # Output: o



# String Looping
my_string = "Hello, World!"

lenght = len(my_string) # Output: 13

for i in range(len(lenght)):
    print(my_string[i])



# String Looping Shorthand
my_string = "Hello, World!"

for i in range(len(my_string)):
    print(i, my_string[i])
# The output would be:
# 0     H
# 1     e
# 2     l
# etc. etc.

# There is a shorter way to do it
my_string = "Hello, World!"

for char in my_string:
    print(char)
# The output would be:
# H
# e
# l
# etc.



# String Concatenation
str1 = "Hello, "
str2 = "World!"
print(str1 + str2)  # Output: Hello, World!



# String Slicing Part 1
my_string = "Hello, World!"

start, end = 1, 5

print(my_string[start:end]) # Output: ello



# String Slicing Part 2
my_string = "NeetCode"
print(my_string[:3])    # Output: Nee
print(my_string[0:3])   # Output: Nee

print(my_string[4:])    # Output: Code
print(my_string[4:8])   # Output: Code

print(my_string[:])     # Output: NeetCode
print(my_string)        # Output: NeetCode



# Reversing a String
my_string = "Hello"
print(my_string[::-1])  # Output: olleH

my_string = "Hello"
start, end, step = 1, 4, 1

print(my_string[start:end])     # Output: ell
print(my_string[start:end:-1])  # Output: lle



# Strings are Immutable
message = "I will never change."
message[0] = "X"    # This will cause an error

before_second = message[:1] # "I"
after_second = message[2:]  # "will never change."

new_message = before_second + after_second



# String Formatting
name = "Alice"
age = 25

msg = "Hello, {}. You are {} years old.".format(name,age)
print(msg)  # Output: Hello, Alice. You are 25 years old.

# We can also use f-strings
msg = f"Hello, {name}. You are {age} years old."
print(msg)  # Output: Hello, Alice. You are 25 years old.



# Intro to Lists
# A list is a collection of items that are stored in a specific order.
my_list = [1, 2, 3]

print(len(my_list))     # Output: 3

print(my_list[0])     # Output: 1
print(my_list[1])     # Output: 2
print(my_list[2])     # Output: 3

my_list = ["I", "am", "a", "list"]

print(my_list[0])     # Output: I
print(my_list[1])     # Output: am
print(my_list[2])     # Output: a
print(my_list[3])     # Output: list

my_list = [1, "Hello", 3.14, True]



# List Operations
my_list = [1, 2, 3]

if len(my_list) > 0:
    print("The list is not empty")
else:
    print("The list is empty")

if my_list:
    print("The list is not empty")
else:
    print("The list is empty")

if 2 in my_list:
    print("2 is in the list")
else:
    print("2 is not in the list")

if 4 not in my_list:
    print("4 is not in the list")
else:
    print("4 is not in the list")



# List Looping
# By using the length of the list:
my_list = [1, 2, 3, 4, 5]

lenght = len(my_list)

for i in range(lenght):
    print(my_list[i])

# Or by using the in operator:
my_list = [1, 2, 3, 4, 5]

for element in my_list:
    print(element)



# List Functions
my_list = [1, 2, 3, 4, 5]

print(sum(my_list))     # Output: 15
print(min(my_list))     # Output: 1
print(max(my_list))     # Output: 5



# List Append
my_list = [1, 2, 3]

print(my_list)      # Output: [1, 2, 3]

my_list.append(4)

print(my_list)      # Output: [1, 2, 3, 4]



# List Pop
my_list = [1, 2, 3]

my_list.pop()
print(my_list)      # Output: [1, 2]

my_list = [1, 2, 3]

my_list.pop(0)
print(my_list)      # Output: [2, 3]

my_list.pop(0)
print(my_list)      # Output: [3]



# List Find
my_list = [1, 2, 3, 4, 5, 3]

print(my_list.index(3))     # Output: 2
# The above code snippet will print the index
# of the first occurence of the element 3.
# If the element is not present in the list,
# a ValueError will be raised



# List Slicing
my_list = [1, 2, 3, 4, 5]

print(my_list[1:3])     # Output: [2, 3]

print(my_list[:3])      # Output: [1, 2, 3]

print(my_list[2:])      # Output: [3, 4, 5]

print(my_list[::-1])    # Output: [5, 4, 3, 2, 1]

print(my_list[-1])      # Output: 5

print(my_list[-2])      # Output: 4

print(my_list[-3])      # Output: 3



# Tuples
# Tuples are very similar to lists, but they have one key difference:
# they are immutable. Once a tuple is created, it cannot be changed.
my_tuple = (4, 5, 6)

print(my_tuple)         # Output: (4, 5, 6)

# We can index it like a list:
my_tuple = (4, 5, 6)

print(my_tuple[0])      # Output: 4
print(my_tuple[1])      # Output: 5
print(my_tuple[2])      # Output: 6

# We can also use slicing:
my_tuple = (4, 5, 6)

print(my_tuple[1:])     # Output: (5, 6)

# Since we cannot modify a tuple, th following code will raise an error
my_tuple = (4, 5, 6)

my_tuple[0] = 1     # Raises an error



# Intro to Sets
# A set is like a list, but they are unordered.
# If order is important, you shoulduse a list.
# A set can only contain unique eleemnts.
# If you try to add a duplicate element, it will be ignored.
my_set = {1, 2, 3}

print(my_set)       # Output: {1, 2, 3}

my_set = {3, 2, 1}

print(my_set)       # Output: {1, 2, 3}

my_set = set()

my_set.add(1)
my_set.add(2)
my_set.add(1)

print(my_set)       # Output: {1, 2}



# Set Operations
# We can remove elements from a set using the remove() function.
my_set = {1, 2, 3}

my_set.remove(2)

print(my_set)       # Output: {1, 3}

my_set.remove(4)    # Raises KeyError

# Just like with lists, we can loop over elements within a set using
# for loops. The diference is that we cannot accese elements by index
# because sets are unordered. The order that we loop over a set is not
# guaranteed.
my_set = {1, 2, 3}

for element in my_set:
    print(element)

# We can convert a list into a set by passing the list into the set()
# function. We can then convert the set back into a list by passing it
# into the list() function. This is an easy way to remove duplicates
# from a list.
my_list = [1, 2, 3, 4, 5, 1, 2, 5]

my_set = set(my_list)

print(my_set)       # Output: {1, 2, 3, 4, 5}

my_list_no_duplicates = list(my_set)

# We can use the in keyword to check if an element is present in a set.

my_set = {"Cat", "Dog", "Mouse"}

contains_cat = "Cat" in my_set      # True
contains_lion = "Lion" in my_set    # False



# Intro to Dictionaries
# Used to store key:value pairs.
my_dict = {
    "Alice": 25,
    "Bob": 30,
    "Charlie": 35
}

my_dict = {}

my_dict["Alice"] = 25
my_dict["Bob"] = 30
my_dict["Charlie"] = 35



# Dict Operations
# Dictionaries cannot contain duplicate keys, just like sets

my_dict = {"a":1, "b":2, "c":3}

print(my_dict["a"])     # Output: 1

my_dict["a"] = 4

print(my_dict["a"])     # Output: 4

# The keys have to be unique, but the values can be duplicates
my_dict = {"a":1, "b":1, "c":1}

your_dict = {
    "a":10,
    "apple":12,
    "bat":7
}
# Print the dictionary itself
print(your_dict)
# Print the value of the key "a"
print(your_dict["a"])
# Print True or False depending on whether the key "d" is
# in the dictionary
print("d" in your_dict)
# Reassign the value of the key "a" to 4
your_dict["a"] = 4
# Print the dictionary again
print(your_dict)



# Dict Looping
# You can use len() to get the length of a dictionary
my_dict = {"a":1, "b":2, "c":3}
print(len(my_dict))     # Output: 3

# But just like with sets, the length won't help the user loop over it
my_dict = {"a":1, "b":2, "c":3}

for key in my_dict:
    value = my_dict[key]
    print(key, value)

# We can also use the items() method to loop over both the keys and values
my_dict = {"a":1, "b":2, "c":3}

for key, value in my_dict.items():
    print(key, value)



# Dict Remove
my_dict = {"a":1, "b":2, "c":3}

my_dict.pop("a")

print(my_dict)      # Output: {"b": 2, "c": 3}

my_dict.pop("d")    # Raises KeyError

# If you do not want to worry about KeyErrors, you can use the second
# argument of the pop() function. This argument is the default 
# value that will be returned if th key doesn't exist

my_dict = {"a":1, "b":2, "c":3}

value = my_dict.pop("d", 0)     # Returns 0, no error occurs

# You can also use the del keyword to remove a key:value pair
my_dict = {"a":1, "b":2, "c":3}

del my_dict["a"]



# Dict Values
# Another way of iterating over a dictionary is using the values() function
my_dict = {"a":1, "b":2, "c":3}

for value in my_dict.values():
    print(value)

# A useful case for this is when we want to convert the values of a dictionary into a list.
my_dict = {"a":1, "b":2, "c":3}

value = list(my_dict.values())

print(values)       # Output: [1, 2, 3]



# Reading Input
user_input = input("Enter some text: ")
print(user_input)



# Type Conversion with Input
# By default, input() returns the user input as a string.
# You need to explicitly convert it if you need something else.
age = int(input("Enter your age: "))

temperature = (float(input("Enter the temperature: ")))



# Parse Input
# Restructuring the input in some way is called PARSING the input
number_string = "1,2,3"

string_list = number_list.split(",")

print(string_list)      # Output: ['1', '2', '3']



# Try Except
try:
    # Code that might cause an erro
    result = 10 / 0
except:
    print("An error occured!")

print("This will be printed regardless")



# Error Catching
try:
    result = 10 / 0
except Exception as error:
    print("Error:", error)



# Multiple Except Blocks
try:
    num1 = int(a)
    num2 = int(b)
    result = num1 / num2
except ValueError:
    print("Error: Invalid value!")
except ZeroDivisionError:
    print("Error: Division by zero!")
except Exception as error:
    print("An error occurred: ", error)
'''