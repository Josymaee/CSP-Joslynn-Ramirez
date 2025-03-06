// Joslynn Ramirez, My Family Loop C
#include <stdio.h>
#include <string.h>

int main(void){
    char family[][50] = {"Anna", "Jose", "Andie", "Addy"};
    int ilength = sizeof(family)/sizeof(family[0]);
  
    int i;
    for(i = 0; i< ilength; i++){
        printf("Hello, %s\n", family[i]);

}
    return 0;
}