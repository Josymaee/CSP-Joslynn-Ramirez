#include <stdio.h>

int main() {
    char animal[50], place[50], verb[50];

    printf("Name an animal: ");
    scanf("%49s", animal);

    printf("Name a place: ");
    scanf("%49s", place);

    printf("Name a verb: ");
    scanf("%49s", verb);

    printf("The %s went to the %s and it %s with their friend, the loud laughing donkey.\n", animal, place, verb);

    return 0;
}
