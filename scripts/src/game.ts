type Symbols = ["o", "x"]

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 0
let symbols: Symbols = ['o', 'x']
let gameOver = false
let winnerSeq: number[]
let squares: NodeListOf<HTMLElement>

function handleMove(index: number) {
    if (gameOver) {
        return
    }

    if (board[index] == '') {
        board[index] = symbols[currentPlayer]

        gameOver = win()

        if (!gameOver) {
            currentPlayer = currentPlayer == 0 ? 1 : 0
        }
    }
    return gameOver
}

function win() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (
            board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''
        ) {
            winnerSeq = seq
            return true
        }
    }
    return false
}
