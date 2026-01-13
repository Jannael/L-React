import { useState } from 'react'

function App() {
	return (
		<div className='min-h-dvh flex justify-center items-center'>
			<TennisSelector />
		</div>
	)
}

function TennisSelector() {
	const [img, setImg] = useState('/shoes1.png')

	return (
		<section className='flex text-white relative flex-col items-center'>
			<div className='flex flex-col gap-2 absolute z-10 -left-1/12 top-1/10'>
				<TennisHover
					action={() => setImg('/shoes1.png')}
					alt='shoes1'
					img='/shoes1.png'
				/>
				<TennisHover
					action={() => setImg('/shoes2.png')}
					alt='shoes2'
					img='/shoes2.png'
				/>
				<TennisHover
					action={() => setImg('/shoes3.png')}
					alt='shoes3'
					img='/shoes3.png'
				/>
			</div>
			<div className='bg-white/40 backdrop-blur-2xl w-70 h-70 p-5 flex flex-col justify-center items-center rounded-3xl pl-12'>
				<h1 className='text-2xl font-bold'>Nike Air Zoom</h1>
				<img
					alt='Selected shoe'
					className='object-contain transition-all mb-5'
					src={img}
					width={200}
				/>
				<SizeSelector sizes={['1', '2', '3', '4']} />
			</div>
			<button className='px-4 py-2 bg-white text-black rounded-full absolute -bottom-1/14' type='button'>
				Add to cart
			</button>
		</section>
	)
}

function SizeSelector({ sizes }: { sizes: string[] }) {
	return (
		<div className='flex gap-2 items-center'>
			<h3 className='text-sm font-bold'>Size: </h3>
			{sizes.map((size) => {
				return (
					<button
						className='bg-white text-black size-6'
						key={size}
						type='button'
					>
						{size}
					</button>
				)
			})}
		</div>
	)
}

function TennisHover({
	img,
	alt,
	action,
}: {
	img: string
	alt: string
	action: () => void
}) {
	return (
		<button
			className='p-1.5 bg-white/30 rounded-xl backdrop-blur-2xl size-18 grid place-content-center'
			onFocus={action}
			onMouseOver={action}
			type='button'
		>
			<img
				alt={alt}
				className='hover:rotate-25 transition-transform duration-500 size-full'
				src={img}
			/>
		</button>
	)
}

export default App
