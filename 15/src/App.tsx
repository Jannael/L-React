import debounce from 'just-debounce-it'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePokemon } from './hooks'

function App() {
	const offset = useRef(0)
	const [input, setInput] = useState<string>('')
	const [debounceInput, setDebounceInput] = useState<string | number>(0)

	const pokemon = usePokemon(debounceInput)

	const debounceFn = useMemo(
		() => debounce((value: string) => setDebounceInput(value), 500),
		[],
	)
	useEffect(() => {
		if (pokemon === undefined) return
		offset.current = Number(pokemon.data?.id)
	}, [pokemon])

	return (
		<div className='w-8/10 flex flex-col justify-center items-center gap-6 relative max-w-5xl'>
			<input
				className='bg-emerald-700 w-full text-white p-3 rounded-full'
				onChange={(e) => {
					setInput(e.target.value)
					debounceFn(e.target.value)

					if (!Number.isNaN(Number(e.target.value)))
						offset.current = Number(e.target.value)
				}}
				placeholder='search your pokemon by id or name'
				type='text'
				value={input}
			/>
			{/* cspell:disable-next-line */}
			<img alt='bg' className='w-full' src='/pokedex.gif' />
			<div className='w-3/10  h-3/10 absolute left-1/11 flex justify-center items-center text-black flex-col'>
				{pokemon !== undefined &&
					pokemon.isLoading === false &&
					pokemon.data !== undefined && (
						<>
							<img
								alt='pokemon'
								className='h-7/10'
								src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${Number(pokemon.data.id) + 1}.svg`}
							/>
							<h2>{pokemon.data.name}</h2>
						</>
					)}
				{pokemon.error !== null && <div>{pokemon.error.message}</div>}

				{pokemon?.isLoading && (
					<img
						alt='pokemon'
						className='h-7/10 animate-spin'
						// cspell:disable-next-line
						src={`/pokeball.png`}
					/>
				)}
			</div>
			<button
				className='cursor-pointer w-1/15 h-1/16 absolute left-11/18 top-12/16'
				onClick={() => {
					offset.current = offset.current > 0 ? offset.current - 1 : 0
					setDebounceInput(offset.current > 0 ? offset.current - 1 : 0)
				}}
				type='button'
			>
				{' '}
			</button>
			<button
				className='cursor-pointer w-1/15 h-1/16 absolute left-12/18 top-12/16'
				onClick={async () => {
					offset.current = offset.current + 1
					setDebounceInput(offset.current + 1)
				}}
				type='button'
			>
				{' '}
			</button>
		</div>
	)
}

export default App
