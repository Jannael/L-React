import { Navbar } from './../components/Navbar.tsx'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../icons.tsx'
// cspell:disable

export function Home() {
	return (
		<div className='size-full flex flex-col justify-center items-center'>
			<Navbar />
			<div className='flex-1 flex flex-col items-center text-txt xl:flex-row '>
				<img
					alt='potatoes img'
					className='size-4/6 object-contain drop-shadow-white drop-shadow-2xl xl:order-2 -z-10'
					src='/potatoes.png'
				/>
				<div className='px-10 flex flex-col justify-center items-center xl:block'>
					<TextContent />
					<IconsContainer />
				</div>
			</div>
		</div>
	)
}

export function IconsContainer() {
	return (
		<div className='mt-3.5'>
			<FacebookIcon />
			<TwitterIcon />
			<InstagramIcon />
		</div>
	)
}

export function TextContent() {
	return (
		<>
			<h1 className='text-3xl mb-3'>
				Its Finger Lickin <span className='font-bold'>Good.</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod
				officia provident id cupiditate, officiis commodi veniam expedita
				doloribus? Facilis veritatis molestias veniam exercitationem molestiae
				illo placeat voluptate numquam soluta!
			</p>
			<button
				className='bg-white rounded-full text-black px-3 py-2 mt-2'
				type='button'
			>
				Order now
			</button>
		</>
	)
}
