// cspell:disable

import { useState } from 'react'

function App() {
	return (
		<div className='min-h-dvh'>
			<Menu />
		</div>
	)
}

const characters = [
	{ color: 'bg-[#f0833a]', name: 'Goku', img: '/goku.webp' },
	{ color: 'bg-[#2955dc]', name: 'Vegueta', img: '/vegueta.jpg' },
	{ color: 'bg-[#d6c155]', name: 'Gohan', img: '/gohan.jpg' },
	{ color: 'bg-[#5c4ea3]', name: 'Trunks', img: '/trunks.jpg' },
	{ color: 'bg-[#f85b1a]', name: 'Goten', img: '/goten.jpg' },
]

function Menu() {
	const [img, setImg] = useState(characters[3].img)
	const [bg, setBg] = useState(characters[0].color)
	const [open, setOpen] = useState(true)

	return (
		<div className='size-full flex'>
			<nav
				className={`w-1/2 min-h-dvh flex flex-col ${open ? 'right-1/2' : '-right-1/2'} absolute ${bg} transition-all justify-center items-center text-white text-3xl text-right`}
			>
				{characters.map((character) => {
					return (
						<a
							data-img={character.img}
							href='/'
							key={character.name}
							onFocus={() => {
								setImg(character.img)
								setBg(character.color)
							}}
							onMouseEnter={() => {
								setImg(character.img)
								setBg(character.color)
							}}
						>
							{character.name}
						</a>
					)
				})}
			</nav>
			{!open && (
				<button
					className='bg-black text-white p-2 rounded-2xl absolute right-0 m-8'
					onClick={() => setOpen(true)}
					type='button'
				>
					Open
				</button>
			)}
			<div
				className={`transition-all w-1/2 min-h-dvh bg-center bg-cover bg-black ${open ? 'right-0' : '-right-1/2'} absolute`}
				style={{
					backgroundImage: `url(${img})`,
				}}
			>
				<button
					className='bg-white absolute top-0 right-0 m-8 p-2 rounded-2xl'
					onClick={() => setOpen(false)}
					type='button'
				>
					Close
				</button>
			</div>
		</div>
	)
}

export default App
