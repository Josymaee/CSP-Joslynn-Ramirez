//Joslynn Ramirez, Time of day c

#include <stdio.h> 
#include <time.h> 
int hour;

int main ()
{
    time_t rawtime;
    struct tm *timeinfo; 

    time(&rawtime); 
    timeinfo = localtime (&rawtime); 
    printf("Current local time and date: %s ", asctime(timeinfo));
    printf ("tell me the hour in military time:\n"); 
    scanf("%d", &hour); 
    if (hour <  12){
    printf("bad morning"); 
    }else if (hour<18){
        printf("good afternoon"); 
    }else{
        printf ("good evening"); 
    }
    
    return 0; 
}
