class BankAccount:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Invalid amount. Please enter a positive value.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
        else:
            print("Insufficient funds or invalid amount.")

    def check_balance(self):
        print(f"Account balance for {self.account_holder}: ${self.balance}")


class Bank:
    def __init__(self):
        self.accounts = {}

    def create_account(self, account_number, account_holder, initial_balance=0):
        if account_number not in self.accounts:
            new_account = BankAccount(account_number, account_holder, initial_balance)
            self.accounts[account_number] = new_account
            print(f"Account created for {account_holder} with account number {account_number}.")
        else:
            print("Account number already exists. Please choose a different one.")

    def get_account(self, account_number):
        return self.accounts.get(account_number)

    def list_accounts(self):
        for account in self.accounts.values():
            print(f"Account holder: {account.account_holder}, Account number: {account.account_number}")

def main():
    bank = Bank()

    while True:
        print("\n===== Bank Account System =====")
        print("1. Create an account")
        print("2. Deposit money")
        print("3. Withdraw money")
        print("4. Check account balance")
        print("5. List all accounts")
        print("6. Exit")

        choice = input("Enter your choice (1-6): ")

        if choice == '1':
            account_number = input("Enter account number: ")
            account_holder = input("Enter account holder's name: ")
            bank.create_account(account_number, account_holder)

        elif choice == '2':
            account_number = input("Enter account number: ")
            account = bank.get_account(account_number)
            if account:
                amount = float(input("Enter the amount to deposit: $"))
                account.deposit(amount)
            else:
                print("Account not found. Please enter a valid account number.")

        elif choice == '3':
            account_number = input("Enter account number: ")
            account = bank.get_account(account_number)
            if account:
                amount = float(input("Enter the amount to withdraw: $"))
                account.withdraw(amount)
            else:
                print("Account not found. Please enter a valid account number.")

        elif choice == '4':
            account_number = input("Enter account number: ")
            account = bank.get_account(account_number)
            if account:
                account.check_balance()
            else:
                print("Account not found. Please enter a valid account number.")

        elif choice == '5':
            bank.list_accounts()

        elif choice == '6':
            print("Exiting the Bank Account System.")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()