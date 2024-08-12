# Step 1: Display the Tic-Tac-Toe board
def display_board(board):
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

# Step 2: Get the position from the player
def player_input(board, player):
    while True:
        try:
            position = int(input(f"Player {player}, enter your move (1-9): ")) - 1
            if position in range(9) and board[position] == " ":
                return position
            else:
                print("Invalid move. The position is either occupied or out of range.")
        except ValueError:
            print("Please enter a number between 1 and 9.")

# Step 3: Check whether there is a winner or not
def check_win(board, player):
    win_conditions = [
        [0, 1, 2],  # top row
        [3, 4, 5],  # middle row
        [6, 7, 8],  # bottom row
        [0, 3, 6],  # left column
        [1, 4, 7],  # middle column
        [2, 5, 8],  # right column
        [0, 4, 8],  # diagonal from top-left
        [2, 4, 6]   # diagonal from top-right
    ]
    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
            return True
    return False

# Step 4: Check if the board is full (tie)
def check_tie(board):
    return " " not in board

# Step 5: Main function to play the game
def play():
    board = [" " for _ in range(9)]
    current_player = "X"
    
    while True:
        display_board(board)
        position = player_input(board, current_player)
        board[position] = current_player
        
        if check_win(board, current_player):
            display_board(board)
            print(f"Congratulations! Player {current_player} wins!")
            break
        
        if check_tie(board):
            display_board(board)
            print("The game is a tie!")
            break
        
        current_player = "O" if current_player == "X" else "X"

# Step 6: Start the game
play()
