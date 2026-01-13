import { useState } from 'react'
import { CloseMenuIcon, LeftIcon, MenuIcon, RightIcon } from './assets/icon'

const lorem =
	// cspell:disable-next-line
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam illo totam expedita cum reprehenderit, incidunt possimus distinctio eligendi culpa ullam placeat provident consequuntur est. Similique voluptatem exercitationem ea nobis nemo!'

const countries = [
	{ img: '/c1.jpg', title: 'Country 1', content: lorem },
	{ img: '/c2.jpg', title: 'Country 2', content: lorem },
	{ img: '/c3.jpg', title: 'Country 3', content: lorem },
]

function App() {
	const [country, setCountry] = useState<number>(0)

	const nextCountry = () => {
		setCountry((current) => {
			if (current >= 2) return 0
			return current + 1
		})
	}

	const prevCountry = () => {
		setCountry((current) => {
			if (current <= 0) return 2
			return current - 1
		})
	}

	return (
		<div className='size-full min-h-dvh'>
			<Navbar />
			<Bg img={countries[country].img} />
			<CountryInfo
				content={countries[country].content}
				title={countries[country].title}
			/>
			<div className='absolute right-0 bottom-0 text-white w-1/2 flex justify-between mb-4'>
				<button className='cursor-pointer' onClick={prevCountry} type='button'>
					<LeftIcon />
				</button>
				<button className='cursor-pointer' onClick={nextCountry} type='button'>
					<RightIcon />
				</button>
			</div>
		</div>
	)
}

export default App

const sections = [
	{ text: 'Home', extraClasses: 'bg-white text-black p-4' },
	{ text: 'Destination', extraClasses: 'text-white' },
	{ text: 'About', extraClasses: 'text-white' },
	{ text: 'Contact', extraClasses: 'text-white' },
]

function Navbar() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<header className='size-full min-h-dvh flex flex-col items-center '>
			<nav
				className={`
					${open ? 'right-0' : '-right-1/2'}
					absolute 
					w-3/10 
					h-full
					flex
					flex-col
					bg-black/80
					items-center
					gap-4
					transition-right
					duration-500
					md:right-0
					md:relative
					md:flex-row
					md:w-full
					md:justify-center
					md:bg-transparent
				`}
			>
				<ul className='flex flex-col order-2 gap-2 md:flex-row items-center md:w-full md:justify-around'>
					<h2 className='text-white text-center text-3xl font-bold mb-4 md:mb-0'>
						WORLD
					</h2>
					<div className='flex flex-col gap-2 md:flex-row items-center justify-center md:gap-4'>
						{sections.map((section) => {
							const { text, extraClasses } = section
							return (
								<NavbarItem
									extraClasses={extraClasses}
									key={text}
									text={text}
								/>
							)
						})}
					</div>
				</ul>
				<button
					className='text-white self-end m-10 cursor-pointer md:hidden'
					onClick={handleOpen}
					type='button'
				>
					<CloseMenuIcon />
				</button>
			</nav>

			{!open && (
				<button
					className='cursor-pointer absolute top-0 right-0 m-10 md:hidden text-white'
					onClick={handleOpen}
					type='button'
				>
					<MenuIcon />
				</button>
			)}
		</header>
	)
}

function NavbarItem({
	text,
	extraClasses,
}: {
	text: string
	extraClasses: string
}) {
	return (
		<button
			className={`cursor-pointer rounded-2xl text-2xl ${extraClasses}`}
			type='button'
		>
			{text}
		</button>
	)
}

function Bg({ img }: { img: string }) {
	return (
		<div
			className='size-full min-h-dvh bg-cover bg-center transition-all absolute top-0 left-0 -z-50'
			style={{ backgroundImage: `url(${img})` }}
		></div>
	)
}

function CountryInfo({ title, content }: { title: string; content: string }) {
	return (
		<div className='w-1/2 min-h-dvh absolute text-white top-0 left-0 flex flex-col justify-center items-center md:pl-10 px-4 gap-4 bg-white/20 backdrop-blur-2xl -z-10'>
			<h1 className='text-5xl font-bold'>{title}</h1>
			<p className='text-balance'>{content}</p>
		</div>
	)
}
