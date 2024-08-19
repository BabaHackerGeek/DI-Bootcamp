# rock-paper-scissors.py

# The goal of this file is to manage the user interface for the Rock, Paper, Scissors game.
# This script will rely on the `Game` class created in `game.py`.
# It will have the following functions:
# 1. `get_user_menu_choice()`: Displays the menu and handles the user's choice.
# 2. `print_results(results)`: Prints the results of all games played in a user-friendly way.
# 3. `main()`: The main game loop that will keep showing the menu until the user decides to quit.

from game import Game

def get_user_menu_choice():
    # Step 1: Display a menu and get the user's choice
    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    choice = input("Please select an option: ").strip()

    if choice in ['1', '2', '3']:
        return choice
    else:
        print("Invalid choice. Please select 1, 2, or 3.")
        return get_user_menu_choice()

def print_results(results):
    # Step 2: Print the results of all games played
    print("\nGame Results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

def main():
    # Step 3: Main game loop
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == '1':
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == '2':
            print_results(results)
        elif choice == '3':
            print_results(results)
            break

if __name__ == "__main__":
    main()
