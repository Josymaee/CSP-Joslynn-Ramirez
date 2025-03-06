#Joslynn Ramirez, Loops Notes python

#What is a loop
   #section of code that repeats multiple times

#2. What are the two types of loops
     #For loop
nums = [12, 3, 66, 7, 3, 3, 2]

for num in nums:
    print(num)

#While loop
x = 0

while x < 10:
    print(x)
    x+= 1
#3. What is iteration
    #That specific instance of the loop
    #Iteration the amount of times you are looping through
    
#4. What are lists
    # A variable that holds multiple values
nums = [1,2,3,4,5,6,7] #No ""
friends = ["Yenesis", "David", "Johann", "Juan"] #""
print(nums) #prints whole list is ugly
print(friends[3]) #prints the 3rd one

friends[4] = "Juanito"
friends. pop(2)
friends.insert(1, "Evelyn")
friends.insert(2, ["person", "person_two", "person_three"])
print(friends)



#5. How do you make lists in Python
    #steps to make a list
    #step 1. Use []
    #add in items with correct data types
#Have a coma between each items

#6. How do you make loops in Python?
for friends in friends:
    print(friends)

for x in range(1,5):
    print(x)

#7. How do you make while loops in Python?
import random 
x = 1 #Keeps count of the iteration
goose = random. randint(1,20)

while x <= 20:
    if x == goose:
        print("Goose!")
        break #Tells the loops to stop
    else:
        print("Duck")
    x+= 1

#Continue moves on to the next iteration without finishing