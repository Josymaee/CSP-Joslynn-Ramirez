// Joslynn Ramirez, Loop notes c
#include <stdio.h>
#include <string.h>
int main(void){
// 1. What is a loop?
    //a section of code that gets repeated multiple times

// 2. What are the two types of loops
    //While loops
    int start = 0;
    while(start <5){
        printf("Hello!\n");
        start++;
    }
    //for loop
    int q;
    for(q=0;q<5;q++){
        printf("%d\n", q);
    }
// 3. What is iteration
    // Repeating something with minor changes 

// 4. What are array (list)?
    // a variable that holds multiple values

// 8. How do you make array in c?
    // arrays all need to be the same data type
int grades[] = {88, 97, 100, 70, 72, 99, 61};
   // 1. set data type 2. AFTER naming put brackets and write the length of the list 3. list is surrounded by curly brackets {} 4. Commas , between each item
// print a single item
printf("CSP grade: %d\n", grades[2]);
//change an item in the array
grades[2] = 95;
printf("CSP grade: %d\n", grades[2]);
//size of list in bytes
int size = sizeof(grades);
// length in list items
int length = sizeof(grades)/sizeof(grades[0]);
printf("%d\n", length);
// array with strings
// First brackets set the length of the list
//seconds brackets sets the length of each string 
char movies[][20] = {"Cars", "Trausre Planet", "An American Tale", "Marley and m=Me", "The Avengers"};
printf("The movie is %s!\n", movies[1]);
int mlength = sizeof(movies)/sizeof(movies[0])
// 9. How do you make loops for C

// set the iterator, keeps track of how many times ive gone through the loop (best practice to set at x or i)
int x;
// in parenthesis (Starting point; ending point; what we count by)
for(x = 0; x <= 10; x+=2){
    printf("%d\n", x);
}
int m;
for(m=0;m<mlength;m++){
    printf("%s\n", movies[m]);
}
// 10. How do you make while loops in C
int w = 0;

while(w<100){
    printf("%d\n", w);
    w += 10;
}
    return 0;
}