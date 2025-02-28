// Josy Ramirez, time c


#include <stdio.h>
#include <time>


int main(void){
    time_t seconds;
    seconds = time(NULL);
    printf("Seconds since Junuary 1, 1970 = %d\n" , seconds);


    //current time
    time_t rawtime;
    struct tm * timeinfo;


    time(&rawtime);
    timeinfo = localtime(&rawtime);
    printf("Current time and date is %s\n", asctime(timeinfo));


    //current hour
    time_t now = time(NULL);
    //now = time(NULL); //same thing
    struct tm * tm_struct = localtime(&now);
    int hour = tm_struct->tm_hour;
    printf("%d\n", hour);


     return 0;
}
