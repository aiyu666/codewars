# If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

# Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

# [[0, 0, 1],
#  [0, 1, 2],
#  [2, 1, 0]]
# We want our function to return:

# -1 if the board is not yet finished AND no one has won yet (there are empty spots),
# 1 if "X" won,
# 2 if "O" won,
# 0 if it's a cat's game (i.e. a draw).
# You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

def is_solved(board):
    if check_slash(board, 0):
        return -1
    for sign in range(1, 3):
        if check_column(board, sign) or check_row(board, sign) or check_slash(board, sign):
            return sign
    if check_empty(board):
        return -1
    return 0


def check_slash(board, sign):
    return all([board[i][i] == sign for i in range(3)]) or all(
        [board[i][i] == sign for i in range(2, -1, -1)])


def check_column(board, sign):
    for row in range(3):
        if all([board[column][row] == sign for column in range(3)]):
            return True
    return


def check_row(board, sign):
    for column in range(3):
        if all([board[column][row] == sign for row in range(3)]):
            return True
    return


def check_empty(board):
    for list in range(3):
        if 0 in board[list]:
            return True


board = [[[1, 2, 0],
         [0, 1, 2],
         [0, 0, 1]]]
print(is_solved(board) == -1)

# not yet finished
board = [[0, 0, 1],
         [0, 1, 2],
         [2, 1, 0]]
print(is_solved(board) == -1)


# winning row
board = [[1, 1, 1],
         [0, 2, 2],
         [0, 0, 0]]
print(is_solved(board) == 1)

# winning column
board = [[2, 1, 2],
         [2, 1, 1],
         [1, 1, 2]]
print(is_solved(board) == 1)

# draw
board = [[2, 1, 2],
         [2, 1, 1],
         [1, 2, 1]]
print(is_solved(board) == 0)
