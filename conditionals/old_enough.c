//Joslynn Ramirez, old enough c

#include <stdio.h>
#include <stdbool.h>

int age=12;

int main(void){

    if (age >= 18){
        printf("you are old enough to vote\n");
    }else{
        printf("you aren't old enough to vote\n");
    }
    if (age >= 16){
        printf("you are old enough to drive\n");
    }else{
        printf("you cant drive quite yet...\n");
    }
    if (age >= 15){
        printf("you are old enough to get a learners permit\n");
    }else{
        printf("you can not get a learners permit\n");
    }
    if (age >= 5){
        printf("you can go to school\n");
    }else{
        printf("you cannot go to school\n");
    }
    return 0;
}
