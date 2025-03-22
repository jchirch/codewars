// If we were to set up a Tic-Tac-Toe game, 
// we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, 
// where the value is 0 if a spot is empty, 1 if it is an 1, or 2 if it is an 2, like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if 1 won,
// 2 if 2 won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// pseudo
// check if index positions 0, 1, or 2 for 3 arrays are the same and not 0 (vertical)
// check if all elements in array 0, 1, or 2 are the same and not 0 (horizontal)
// [0][0], [1],[1], [2],[2] are the same and not 0 (diagonal)
// [0][2], [1],[1], [2],[0]
// 
// build out all conditions in a large OR statement, but test for 1, return 1
// build out all conditions in a large OR statement, but test for 2, return 2
// else if there are no 0's return 0, draw (find(0) returns false)
// else return -1, meaning no conditions match and there are still moves to be made



let board1 = [[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]

let board2 = [[2, 0, 1],
[2, 1, 2],
[2, 1, 0]]



function isSolved(board) {
  if ((board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
    (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
    (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1)) return 1

  if ((board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) ||
    (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) ||
    (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2)) return 2

  if ((board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) ||
    (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) ||
    (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1)) return 1

  if ((board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) ||
    (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) ||
    (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2)) return 2

  if ((board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
    (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1)) return 1

  if ((board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
    (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)) return 2

  if (board.flat().includes(0)) return 0
  return -1 
}

console.log(isSolved(board1))
console.log(isSolved(board2))