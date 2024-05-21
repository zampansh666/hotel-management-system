#include <stdio.h>

int main() {
    int i;

    // Using a for loop
    printf("Counting with for loop:\n");
    for (i = 5; i <= 15; i++) {
        printf("%d ", i);
    }
    printf("\n\n");

    // Using a while loop
    i = 5; // Resetting i to 5
    printf("Counting with while loop:\n");
    while (i <= 15) {
        printf("%d ", i);
        i++;
    }
    printf("\n\n");

    // Using a do...while loop
    i = 5; // Resetting i to 5
    printf("Counting with do...while loop:\n");
    do {
        printf("%d ", i);
        i++;
    } while (i <= 15);
    printf("\n");

    return 0;
}
