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

print(msg)k