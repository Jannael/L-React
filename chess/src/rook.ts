export function possibleMovesRook(action: { playing: 'w' | 'b', x: number, y: number }, newBoard: string[][]) {
	const enemyColor = action.playing === 'w' ? 'b' : 'w'

	const moves = (row: number, column: number) => {
		if (newBoard[row][column] !== '') {
			const secondLetter = newBoard[row][column].charAt(1)
			if (secondLetter === enemyColor && !newBoard[row][column].includes('m')) {
				//check if its enemy piece
				newBoard[row][column] = `${newBoard[row][column]}m`
			}
			return false
		}

		if (!newBoard[row][column].includes('m')) {
			newBoard[row][column] = `${newBoard[row][column]}m`
		}
	}

	const row = action.x
	const column = action.y

	// horizontal movement
	// left side
	for (let i = column + 1; i < 8; i++) {
		const functionReturn = moves(row, i)
		if (functionReturn === false) break
	}

	// right side
	for (let i = column - 1; i >= 0; i--) {
		const functionReturn = moves(row, i)
		if (functionReturn === false) break
	}

	// Vertical movement
	// top
	for (let i = row - 1; i >= 0; i--) {
		const functionReturn = moves(i, column)
		if (functionReturn === false) break
	}

	// bottom
	for (let i = row + 1; i < 8; i++) {
		const functionReturn = moves(i, column)
		if (functionReturn === false) break
	}

	return newBoard
}
