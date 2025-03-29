# Josy Ramirez, Financial calculator python

# Budget Calculator

def get_user_inputs():
    print("This is a budget calculator.")
    income = float(input("How much do you make a month? "))
    rent = float(input("How much is your rent? "))
    utilities = float(input("How much do your utilities cost? "))
    groceries = float(input("How much do your groceries cost? "))
    transportation = float(input("How much does your transportation cost? "))
    
    return income, rent, utilities, groceries, transportation

def calculate_percentages(income, rent, utilities, groceries, transportation, savings, expenses):
    return {
        "Rent": (rent / income) * 100,
        "Utilities": (utilities / income) * 100,
        "Groceries": (groceries / income) * 100,
        "Transportation": (transportation / income) * 100,
        "Savings": (savings / income) * 100,
        "Total Expenses": (expenses / income) * 100
    }

def main():
    income, rent, utilities, groceries, transportation = get_user_inputs()
    
    savings = income * 0.2  # 20% of income saved
    expenses = rent + utilities + groceries + transportation
    spend = income - expenses - savings
    
    # Display summary
    print("\n--- Budget Summary ---")
    print(f"Total Income: ${income:.2f}")
    print(f"Total Expenses: ${expenses:.2f}")
    print(f"Savings: ${savings:.2f}")
    print(f"Remaining Money After Expenses and Savings: ${spend:.2f}")
    
    # Calculate and display percentage breakdown
    percentages = calculate_percentages(income, rent, utilities, groceries, transportation, savings, expenses)
    print("\n--- Expense Breakdown (as % of income) ---")
    for category, percentage in percentages.items():
        print(f"{category}: {percentage:.2f}%")
    
    print("Thank you for using my program! :)")

if __name__ == "__main__":
    main()
