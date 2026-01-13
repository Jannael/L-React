import { useRef, useState } from 'react'

function App() {
	const isLoading = useRef(true)
	const [fill, setFill] = useState(0)

	setTimeout(() => {
		isLoading.current = false
	}, 1400)
	setTimeout(() => setFill((current) => current + 1), 100)

	// 100ms => 1 full => 18 18x100 = 1800

	return (
		<div
			className={`
				flex
				w-full min-h-dvh
				justify-center items-center ${isLoading.current ? 'bg-[#fd0]' : 'bg-white'}
			`}
		>
			{isLoading.current ? (
				<>
					<div
						className={`
							w-2/12
							bg-amber-800
							rounded-4xl rounded-b-full
							bottom-8/20 right-4/9 absolute
							transition-all
						`}
						style={{
							height: `${fill}%`,
						}}
					></div>
					<svg
						aria-hidden='true'
						className='
							z-10
							size-3/10 over
						'
						fill='none'
						height='24'
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M4.083 5h10.834a1.08 1.08 0 0 1 1.083 1.077v8.615c0 2.38 -1.94 4.308 -4.333 4.308h-4.334c-2.393 0 -4.333 -1.929 -4.333 -4.308v-8.615a1.08 1.08 0 0 1 1.083 -1.077'></path>
						<path d='M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.288 -1.12 2.333 -2.5 2.333h-2.5'></path>
					</svg>
					<div
						className='
							w-full h-5/12
							bg-[#fd0]
							absolute top-0
						'
					></div>
				</>
			) : (
				<div>WELCOME</div>
			)}
		</div>
	)
}

export default App
