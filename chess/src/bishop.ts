export function possibleMovesBishop(action: {
	x: number
	y: number
	piece: string
	playing: 'w' | 'b'
}, newBoard: string[][]) {
	const row = action.x
	const column = action.y

	const enemyColor = action.playing === 'w' ? 'b' : 'w'

	const codeToCorner = (columnIteration: number, direction: string) => {
		let columnCounter = column + columnIteration

		const codeToIteration = (rowCounter: number) => {
			if (
				newBoard[rowCounter][columnCounter] !== undefined &&
				newBoard[rowCounter][columnCounter] !== ''
			) {
				const secondLetter = newBoard[rowCounter][columnCounter].charAt(1)
				if (
					secondLetter === enemyColor &&
					!newBoard[rowCounter][columnCounter].includes('m')
				) {
					newBoard[rowCounter][columnCounter] =
						`${newBoard[rowCounter][columnCounter]}m`
				}
				newBoard[rowCounter][columnCounter] =
					`${newBoard[rowCounter][columnCounter]}P`
				return false
			} else {
				if (
					newBoard[rowCounter][columnCounter] !== undefined &&
					!newBoard[rowCounter][columnCounter].includes('m')
				) {
					newBoard[rowCounter][columnCounter] =
						`${newBoard[rowCounter][columnCounter]}m`
				}
				columnCounter += columnIteration
				if (columnCounter > 7) return false
				if (columnCounter < 0) return false
			}
		}

		if (direction === 'top') {
			for (let rowCounter = row + 1; rowCounter < 8; rowCounter++) {
				const functionReturn = codeToIteration(rowCounter)
				if (functionReturn === false) break
			}
		} else if (direction === 'bottom') {
			for (let rowCounter = row - 1; rowCounter >= 0; rowCounter--) {
				const functionReturn = codeToIteration(rowCounter)
				if (functionReturn === false) break
			}
		}
	}

	codeToCorner(1, 'top')
	codeToCorner(-1, 'bottom')
	codeToCorner(1, 'bottom')
	codeToCorner(-1, 'top')
  return newBoard
}
