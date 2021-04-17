course = 'python course'

print(course[:5]);

first = 'John'
last = 'Smith'
message = first + ' [' + last + '] is a coder'

#formated string 
msg = f'{first} [{last}] is a coder'

print(message);
print(msg);

print(len(msg));

arr = ['muhammed', 20]
print(arr)

print(type(arr))
print(type(msg))

#function in python
def hello():
    return "hello"

print(hello)

print('*' * 10);
print('*' * 9);
print('*' * 8);
print('*' * 7);
print('*' * 6);
print('*' * 5);
print('*' * 4);
print('*' * 3);
print('*' * 2);
print('*' * 1);

# name = "john smith"
# age = 20
# is_patient = True

# print(name,age,is_patient)

#multi line comment

"""
first comment
second comment
third comment
"""
# input to let the user reply similar to scanner on java

# name = input('what is your name? ')

# color = input('what is your favorite color ')

# print(name + ' likes ' + color )


#TYPE CONVERSIONS

# weight_lb = input('what is your weight in pound? ')

# weight_kg =  int(weight_lb) * 0.45359237

# print(weight_kg)


#STRING

#BREAKING WORDS 
'''
HI, MUHAMMED HOW ARE YOU DOING?
I REALLY MISS YOU 
FROM YOUR FRIEND OUSMAN
'''

#FORMATED STRING just like string literal in js

name = 'Muhammed'
last_name = 'Bojang'

message = first + ' [' + last_name + '] ' + 'is a coder'
print(message)

#correct

msg = f'{first} [{last_name}] is a coder'
print(name.upper(), last_name.upper())

#STRING METHODS
course = 'python course for beginers'

print(course.upper())
print(course.lower())
print(course.find('b'))
print(course.replace('beginers', 'newbies'))
print('python' in course)

#ARITHMETIC 
print(3 + 2)
print(3 *2)
print(5 / 2) # will return float number (with decimal)
print(5 // 2) # will return int (round them)
print(3 % 2) # will return remainder
print(3 ** 2) # power

x = 10
x = x + 3
x += 3 # same as the above equation
print(x)


#MATH FUNCTION
import math
y = 3 - 2
print(round(y)) # round it up
print(abs(-2.39)) # return positive number instead of negative
print(math.ceil(3.4))


# IF ELSE  STATEMENT
 
is_cold = False
is_hot = False

if is_cold:
     print('wear warm cloth')
elif is_hot:
    print('drink plenty of water.')
else:
    print('enjoy your day')


has_credit =  True
has_criminal_record = True

if has_credit and not has_criminal_record:
    print('You are eligible for load')
else:
    print("we're. you're not eligible for a load")

input_name = 'muhammed'

if len(input_name) > 5:
    print('name is too long')



weight = int(input('weight: '))
unit = input('(L)bs or (k)g ')
if unit.upper() == "L":
    converted = weight * 0.45
    print(f"you are {converted} kilos")
else:
    print(f"you are {converted} pounds")



#LOOPS

#While loop

i = 1
while 1 <= 5:
    print(i)
    i = i + 1
print('done')
