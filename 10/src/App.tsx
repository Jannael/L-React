import { useEffect, useRef, useState } from 'react'
import { availableKeys, getRandomKey, keyBg } from './constants.ts'

const initialRandomKey = getRandomKey()
function App() {
	const [randomKey, setRandomKey] = useState<{
		key: string
		code: string
		isSelected?: boolean
	}>(initialRandomKey)

	const board = useRef<typeof availableKeys>(
		availableKeys.map((row) => {
			const newRow = row.map((item) => {
				if (item.code === initialRandomKey.code)
					return { ...item, isSelected: true }
				else return { ...item, isSelected: false }
			})
			return newRow
		}),
	)

	useEffect(() => {
		const ctrl = new AbortController()

		window.addEventListener(
			'keydown',
			(e) => {
				e.preventDefault()
				if (e.code === randomKey.code) {
					const rKey = getRandomKey()
					const newBoard = board.current.map((row) => {
						const newRow = row.map((item) => {
							if (item.code === rKey.code) return { ...item, isSelected: true }
							else return { ...item, isSelected: false }
						})
						return newRow
					})

					board.current = newBoard as typeof availableKeys
					setRandomKey(rKey)
				}
			},
			ctrl,
		)

		return () => ctrl.abort()
	})

	return (
		<div className='bg-black w-full min-h-dvh flex justify-center items-center'>
			<div className='w-full max-w-7xl min-h-dvh flex justify-center items-center'>
				<div className='flex flex-col justify-center items-center min-h-dvh w-8/10 min-w-4xl'>
					{board.current.map((row, indexRow) => {
						return (
							<div
								className='flex w-full gap-1.5 mb-2'
								key={indexRow as number}
							>
								{row.map((keys) => {
									return (
										<Key
											bg={keyBg[indexRow]}
											content={keys.key}
											grow={keys.grow ?? 'grow-1'}
											isSelected={keys.isSelected ?? false}
											isWrong={keys.isWrong ?? false}
											key={keys.code}
										/>
									)
								})}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App

function Key({
	bg,
	content,
	grow,
	isSelected,
	isWrong,
}: {
	bg: string
	content: string
	grow: string
	isSelected: boolean
	isWrong: boolean
}) {
	return (
		<button
			className={`${bg} px-4 py-2 text-white text-2xl rounded-sm ${grow} ${isSelected ? 'animate-pulse' : ''} ${isWrong ? 'animate-spin' : ''}`}
			type='button'
		>
			{content}
		</button>
	)
}
