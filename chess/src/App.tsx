import { useReducer, useState } from 'react'
import { possibleMovesBishop } from './bishop.ts'
import { gameBoardArray, pieces, SpecialStates } from './gameBoard'
import { possibleMovesRook } from './rook.ts'

type Piece = { piece: string; x: number; y: number }

function clearGameBoardPossibleMoves(gameBoard: typeof gameBoardArray) {
	const cleanedBoard = gameBoard.map((row) =>
		row.map((field) => field.replaceAll('m', '')),
	)
	return cleanedBoard
}

function MovesReducer(
	state: typeof gameBoardArray,
	action:
		| {
				x: number
				y: number
				type: 'possibleMoves'
				piece: string
				playing: 'w' | 'b'
		  }
		| { type: 'move'; from: Piece; to: Piece; playing: 'w' | 'b' },
) {
	let newBoard = structuredClone(state)

	if (action.type === 'possibleMoves') {
		const iteration = action.playing === 'w' ? -1 : 1
		newBoard = clearGameBoardPossibleMoves(newBoard)
		switch (action.piece.charAt(0)) {
			case 'r': {
				return possibleMovesRook(
					{ playing: action.playing, x: action.x, y: action.y },
					newBoard,
				)
			}
			case 'k': {
				const row = action.x
				const column = action.y
				const enemyColor = action.playing === 'w' ? 'b' : 'w'

				const positionsArray = [
					{ row: row - 2, column: column + 1 },
					{ row: row - 2, column: column - 1 },
					{ row: row + 2, column: column + 1 },
					{ row: row + 2, column: column - 1 },
					{ row: row - 1, column: column + 2 },
					{ row: row - 1, column: column - 2 },
					{ row: row + 1, column: column + 2 },
					{ row: row + 1, column: column - 2 },
				]

				positionsArray.forEach((position) => {
					// check if its a valid position
					if (position.row < 0 || position.row > 7) return
					else if (position.column < 0 || position.column > 7) return

					const secondLetter = newBoard[position.row][position.column].charAt(1)
					if (
						!newBoard[position.row][position.column].includes('m') &&
						(secondLetter === enemyColor ||
							newBoard[position.row][position.column] === '')
					) {
						newBoard[position.row][position.column] =
							`${newBoard[position.row][position.column]}m`
					}
				})
				return newBoard
			}
			case 'b': {
				return possibleMovesBishop(
					{
						x: action.x,
						y: action.y,
						piece: action.piece,
						playing: action.playing,
					},
					newBoard,
				)
			}
			case 'q': {
				newBoard = possibleMovesBishop(
					{
						x: action.x,
						y: action.y,
						piece: action.piece,
						playing: action.playing,
					},
					newBoard,
				)
				newBoard = possibleMovesRook(
					{ playing: action.playing, x: action.x, y: action.y },
					newBoard,
				)
				return newBoard
			}
			case 'K': {
				const row = action.x
				const column = action.y
				const enemyColor = action.playing === 'w' ? 'b' : 'w'
				// it goes on the clock wise
				const positionsArray = [
					{ row: row - 1, column: column },
					{ row: row - 1, column: column + 1 },
					{ row: row, column: column + 1 },
					{ row: row + 1, column: column + 1 },
					{ row: row + 1, column: column },
					{ row: row + 1, column: column - 1 },
					{ row: row, column: column - 1 },
					{ row: row - 1, column: column - 1 },
				]

				positionsArray.forEach((position) => {
					//check if its a valid position
					if (position.row < 0 || position.row > 7) return
					else if (position.column < 0 || position.column > 7) return
					const secondLetter = newBoard[position.row][position.column].charAt(1)

					if (
						!newBoard[position.row][position.column].includes('m') &&
						(secondLetter === enemyColor ||
							newBoard[position.row][position.column] === '')
					) {
						newBoard[position.row][position.column] =
							`${newBoard[position.row][position.column]}m`
					}
				})

				return newBoard
			}
			case 'p': {
				const row = action.x
				const column = action.y

				if (newBoard[row + iteration][column] === '') {
					newBoard[row + iteration][column] =
						`${newBoard[row + iteration][column]}m`

					if (
						newBoard[row + iteration * 2] !== undefined &&
						newBoard[row + iteration * 2][column] === '' &&
						!newBoard[row + iteration * 2][column].includes('m')
					) {
						newBoard[row + iteration * 2][column] =
							`${newBoard[row + iteration * 2][column]}m`
					}
				}

				const rightColumn = newBoard[row + iteration][column + 1]
				const leftColumn = newBoard[row + iteration][column - 1]
				const enemyColor = action.playing === 'w' ? 'b' : 'w'

				if (
					rightColumn !== undefined &&
					rightColumn !== '' &&
					!rightColumn.includes('m')
				) {
					// get the value only if its no undefined or empty
					const secondLetterRightColumn = rightColumn.charAt(1)
					if (secondLetterRightColumn === enemyColor) {
						newBoard[row + iteration][column + 1] =
							`${newBoard[row + iteration][column + 1]}m`
					}
				}

				if (
					leftColumn !== undefined &&
					leftColumn !== '' &&
					!leftColumn.includes('m')
				) {
					const secondLetterLeftColumn = leftColumn.charAt(1)
					if (secondLetterLeftColumn === enemyColor) {
						newBoard[row + iteration][column - 1] =
							`${newBoard[row + iteration][column - 1]}m`
					}
				}
				return newBoard
			}
			default:
				return state // return state so it does not re-render again
		}
	}

	if (action.type === 'move') {
		if (!newBoard[action.to.x][action.to.y].includes('m')) return newBoard

		newBoard[action.from.x][action.from.y] = ''
		newBoard[action.to.x][action.to.y] = action.from.piece

		const row = action.to.x
		const column = action.to.y

		// pawn promotion to queen
		if (action.from.piece.charAt(0) === 'p') {
			if (action.playing === 'w' && row === 0) {
				newBoard[row][column] = newBoard[row][column].replace('p', 'q')
				return newBoard
			} else if (action.playing === 'b' && row === 7) {
				newBoard[row][column] = newBoard[row][column].replace('p', 'q')
				return newBoard
			}
		}

		return clearGameBoardPossibleMoves(newBoard)
	}

	return newBoard
}

export default function App() {
	const [gameBoard, dispatch] = useReducer(MovesReducer, gameBoardArray)
	const [selected, setSelected] = useState<Piece | null>(null)
	const [playing, setPlaying] = useState<'w' | 'b'>('w')

	return (
		<div
			className='
				flex flex-col
				w-full min-h-dvh
				justify-center items-center
			'
		>
			<section
				className='
					w-[50dvh] h-[50dvh]
				'
			>
				{gameBoard.map((row, index) => {
					return (
						<article
							className={`
								flex
								w-full min-h-1/8
								justify-center
								${index % 2 === 0 ? '[&>*:nth-child(even)]:bg-emerald-500' : '[&>*:nth-child(odd)]:bg-emerald-500'}
								${index % 2 === 1 ? '[&>*:nth-child(even)]:bg-white' : '[&>*:nth-child(odd)]:bg-white'}
							`}
							key={index as number}
						>
							{row.map((field, fieldIndex) => {
								return (
									<Piece
										key={fieldIndex as number}
										onClick={() => {
											if (field.includes('m') && selected !== null) {
												dispatch({
													type: 'move',
													from: selected,
													to: { x: index, y: fieldIndex, piece: field },
													playing,
												})
												setPlaying((current) => (current === 'w' ? 'b' : 'w'))
											}

											if (field.charAt(1) === playing) {
												dispatch({
													x: index,
													y: fieldIndex,
													piece: field,
													type: 'possibleMoves',
													playing,
												})
												setSelected({ piece: field, x: index, y: fieldIndex })
											}
										}}
										piece={field}
									/>
								)
							})}
						</article>
					)
				})}
			</section>
		</div>
	)
}

export function Piece({
	piece,
	onClick,
}: {
	piece: string
	onClick: () => void
}) {
	const img = pieces.find((pieceObj) => {
		if (piece.includes(pieceObj.abbreviation)) return true
		return false
	})

	const isSpecialState = SpecialStates.find((state) => {
		if (piece.includes(state.abbreviation)) return true
		return false
	})

	return (
		<button
			className={`
				flex
				w-1/8 min-h-full
				justify-center items-center ${isSpecialState?.className}
			`}
			onClick={onClick}
			type='button'
		>
			<div
				className={`
					flex
					justify-center items-center ${isSpecialState?.className}
				`}
			>
				{img !== undefined && (
					<img
						alt=''
						className='
							size-full
						'
						src={img.img}
					/>
				)}
			</div>
		</button>
	)
}
