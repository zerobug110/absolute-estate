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

# name = 'Muhammed'
# last_name = 'Bojang'

# message = first + ' [' + last_name + '] ' + 'is a coder'
# print(message)

# #correct

# msg = f'{first} [{last_name}] is a coder'
# print(name.upper(), last_name.upper())

# #STRING METHODS
# course = 'python course for beginers'

# print(course.upper())
# print(course.lower())
# print(course.find('b'))
# print(course.replace('beginers', 'newbies'))
# print('python' in course)

# #ARITHMETIC 
# print(3 + 2)
# print(3 *2)
# print(5 / 2) # will return float number (with decimal)
# print(5 // 2) # will return int (round them)
# print(3 % 2) # will return remainder
# print(3 ** 2) # power

# x = 10
# x = x + 3
# x += 3 # same as the above equation
# print(x)


# #MATH FUNCTION
# import math
# y = 3 - 2
# print(round(y)) # round it up
# print(abs(-2.39)) # return positive number instead of negative
# print(math.ceil(3.4))


# # IF ELSE  STATEMENT
 
# is_cold = False
# is_hot = False

# if is_cold:
#      print('wear warm cloth')
# elif is_hot:
#     print('drink plenty of water.')
# else:
#     print('enjoy your day')


# has_credit =  True
# has_criminal_record = True

# if has_credit and not has_criminal_record:
#     print('You are eligible for load')
# else:
#     print("we're. you're not eligible for a load")

# input_name = 'muhammed'

# if len(input_name) > 5:
#     print('name is too long')



# weight = int(input('weight: '))
# unit = input('(L)bs or (k)g ')
# if unit.upper() == "L":
#     converted = weight * 0.45
#     print(f"you are {converted} kilos")
# else:
#     print(f"you are {converted} pounds")



#LOOPS

#While loop
# i = 1
# while i <= 15:
#     print('*' * i)
#     i = i + 1
# print('done')

    #while loop game

# secret_number = 9
# guess_count = 0
# guess_limit = 3

# while guess_count < guess_limit:
#     guess = int(input('guess: '))
#     guess_count =+ 1
#     if guess == secret_number:
#         print('you won')
#         break
# else:
#     print('sorry you failed')



#for loop

for item in ['Benz', 'AMG', 'G-Wagon', '12 Cylinder', 300000 ]:
    print(item)

for numbs in range(10): #range(5, 10)  range(2, 20, 2)
    print(numbs)

prices = [10, 20, 30]
total = 0

for price in prices:
    total += price
print(f'total price is {total}')

#rectangler array of numbers
matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

print(matrix[0][1])

for row in matrix:
    for item in row:
        print(item)

#list of numbers
number = [1,2,3,4,5,6,7,8,9]

number.append(23) #to add to the list
number.insert(2, 'hi') #to add in the middle of the list
number.remove('hi') #to remove item
number.count(1) #count the number of times it appear on the list
number.sort() # to sort items assending order
number.reverse() # to sort in  decending order
number2 = number.copy() #to make a copy of the original list
number.pop() # to remove the last item
number.clear() #to remove all the items
print(number)


#exercise program to remove duplicate number in a list

exercise1 = [1,2,4,5,7,2,1,8,9,2,4,6,8,3]
for item in exercise1:
    if exercise1.count(item) >= 1:
        exercise1.remove(item)
        print(exercise1)

#correction


exercise_correction = [1,2,4,5,7,2,1,8,9,2,4,6,8,3]
unique = []
for number in exercise_correction:
    if number not in unique:
        unique.append(number)
print(unique)