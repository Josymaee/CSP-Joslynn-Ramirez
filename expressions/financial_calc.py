# Josy Ramirez, Financial calculator python

# Budget Calculator

# Get user inputs
print("This is a budget calculator.")
income = float(input("How much do you make a month? "))

rent = float(input("How much does your rent cost? "))
utilities = float(input("How much do your utilities cost? "))
groceries = float(input("How much do your groceries cost? "))
transportation = float(input("How much does your transportation cost? "))

# Calculations
savings = income * 0.2  # 20% of income saved
expenses = rent + utilities + groceries + transportation
spend = income - expenses - savings

# Display summary
print("\n--- Budget Summary ---")
print(f"Total Income: ${income:.2f}")
print(f"Total Expenses: ${expenses:.2f}")
print(f"Savings: ${savings:.2f}")
print(f"Remaining Money After Expenses and Savings: ${spend:.2f}")

# Calculate percentage breakdown
prent = (rent / income) * 100
putilities = (utilities / income) * 100
pgroceries = (groceries / income) * 100
ptransportation = (transportation / income) * 100
psavings = (savings / income) * 100
pexpenses = (expenses / income) * 100

# Display percentage breakdown
print("\n--- Expense Breakdown (as % of income) ---")
print(f"Rent: {prent:.2f}%")
print(f"Utilities: {putilities:.2f}%")
print(f"Groceries: {pgroceries:.2f}%")
print(f"Transportation: {ptransportation:.2f}%")
print(f"Savings: {psavings:.2f}%")
print(f"Total Expenses: {pexpenses:.2f}%")

print("Thank you for using my program! :)")
