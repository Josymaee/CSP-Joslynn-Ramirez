// Josy Ramirez, Financial Calculator C

#include <stdio.h>

// Function to get user inputs
void getUserInputs(float *income, float *rent, float *utilities, float *groceries, float *transportation) {
    printf("This is a budget calculator.\n");
    printf("How much do you make a month? ");
    scanf("%f", income);
    printf("How much is your rent? ");
    scanf("%f", rent);
    printf("How much do your utilities cost? ");
    scanf("%f", utilities);
    printf("How much do your groceries cost? ");
    scanf("%f", groceries);
    printf("How much does your transportation cost? ");
    scanf("%f", transportation);
}

// Function to calculate and display percentage breakdown
void calculateAndDisplayPercentages(float income, float rent, float utilities, float groceries, float transportation, float savings, float expenses) {
    printf("\n--- Expense Breakdown (as %% of income) ---\n");
    printf("Rent: %.2f%%\n", (rent / income) * 100);
    printf("Utilities: %.2f%%\n", (utilities / income) * 100);
    printf("Groceries: %.2f%%\n", (groceries / income) * 100);
    printf("Transportation: %.2f%%\n", (transportation / income) * 100);
    printf("Savings: %.2f%%\n", (savings / income) * 100);
    printf("Total Expenses: %.2f%%\n", (expenses / income) * 100);
}

int main() {
    float income, rent, utilities, groceries, transportation;
    
    getUserInputs(&income, &rent, &utilities, &groceries, &transportation);
    
    float savings = income * 0.2;  // 20% of income saved
    float expenses = rent + utilities + groceries + transportation;
    float spend = income - expenses - savings;
    
    // Display summary
    printf("\n--- Budget Summary ---\n");
    printf("Total Income: $%.2f\n", income);
    printf("Total Expenses: $%.2f\n", expenses);
    printf("Savings: $%.2f\n", savings);
    printf("Remaining Money After Expenses and Savings: $%.2f\n", spend);
    
    // Calculate and display percentage breakdown
    calculateAndDisplayPercentages(income, rent, utilities, groceries, transportation, savings, expenses);
    
    printf("Thank you for using my program! :)\n");
    
    return 0;
}
