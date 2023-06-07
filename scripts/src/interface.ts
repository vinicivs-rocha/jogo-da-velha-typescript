function handleClick(event: Event) {
    let target = event.target as HTMLElement
    let position = parseInt((target.id))

    if (handleMove(position)) {
        setTimeout(() => {
            alert(
                `O jogador ${currentPlayer + 1} venceu marcando nas casas ${
                    winnerSeq[0] + 1
                }, ${winnerSeq[1] + 1} e ${winnerSeq[2] + 1}`,
            )
        }, 10)
    }
    updateSquare(position, target)
}

function updateSquare(position: number, square: HTMLElement) {
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function reset() {
    board = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 0
    gameOver = false
    winnerSeq = []

    squares.forEach((element) => {
        element.innerHTML = ``
    })
}

document.addEventListener('DOMContentLoaded', () => {
    squares = document.querySelectorAll('.square')
    squares.forEach((element) => {
        element.addEventListener('click', handleClick)
    })
})
