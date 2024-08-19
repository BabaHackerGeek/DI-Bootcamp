# game.py

# The goal of this file is to create a `Game` class that handles a single game of Rock, Paper, Scissors.
# The class should have the following methods:
# 1. `get_user_item(self)`: Asks the user to select rock, paper, or scissors. Ensures the user selects a valid item.
# 2. `get_computer_item(self)`: Randomly selects rock, paper, or scissors for the computer.
# 3. `get_game_result(self, user_item, computer_item)`: Determines the result of the game (win, loss, or draw).
# 4. `play(self)`: Plays a single round of Rock, Paper, Scissors, and prints the result.

import random

class Game:
    def get_user_item(self):
        # Step 1: Ask the user to select an item (rock/paper/scissors)
        user_input = None
        while user_input not in ["rock", "paper", "scissors"]:
            user_input = input("Select an item (rock/paper/scissors): ").lower().strip()
            if user_input not in ["rock", "paper", "scissors"]:
                print("Invalid choice. Please select 'rock', 'paper', or 'scissors'.")
        return user_input

    def get_computer_item(self):
        # Step 2: Select rock/paper/scissors at random for the computer
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        # Step 3: Determine the result of the game
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        # Step 4: Play a single round of the game
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")
        return result
