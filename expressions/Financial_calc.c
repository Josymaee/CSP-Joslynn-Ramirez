// Josy Ramirez, Financial Calculator C

#include <stdio.h>

int main(void) {
    float income, rent, utilities, groceries, transportation, savings, expenses, spend;
    float prent, putilities, pgroceries, ptransportation, psavings, pexpenses;

    // Prompt user for income and expenses
    printf("This is a budget calculator.\nHow much do you make a month?\n");
    scanf("%f", &income);

    printf("How much does your rent cost?\n");
    scanf("%f", &rent);

    printf("How much do your utilities cost?\n");
    scanf("%f", &utilities);

    printf("How much do your groceries cost?\n");
    scanf("%f", &groceries);

    printf("How much does your transportation cost?\n");
    scanf("%f", &transportation);

    // Calculations
    savings = income * 0.2; // 20% of income is saved
    expenses = rent + utilities + groceries + transportation;
    spend = income - expenses - savings;

    // Display income breakdown
    printf("\n--- Budget Summary ---\n");
    printf("Total Income: $%.2f\n", income);
    printf("Total Expenses: $%.2f\n", expenses);
    printf("Savings: $%.2f\n", savings);
    printf("Remaining Money After Expenses and Savings: $%.2f\n", spend);

    // Calculate percentage breakdown
    prent = (rent / income) * 100;
}
