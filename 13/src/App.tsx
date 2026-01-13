import { useState } from 'react'
import { Form } from './components/Form'
import { IconsContainer } from './components/IconsContainer'
import { LoginForm, SignUpForm } from './constants'

function App() {
	const [login, setLogin] = useState(false)

	return (
		<div className='w-full min-h-dvh flex justify-center items-center'>
			<div className='w-full max-w7xl min-h-dvh flex '></div>
			<div
				className={`h-7/4 w-7/4 absolute rounded-full -top-3/5 ${login ? '-left-6/5' : 'left-2/5'} bg-red-500 transition-all duration-500`}
			></div>

			<div className='w-1/2 min-h-dvh flex items-center justify-center flex-col gap-4 absolute left-0 right-0'>
				{!login ? (
					<FormTitles subtitle='SignUp with social platforms' title='SignUp' />
				) : (
					<MiddleScreenContent
						buttonAction={() => setLogin(false)}
						img='/rocket.webp'
						paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit'
						textButton='SignUp'
						title='Your new?'
					/>
				)}
			</div>
			<div className='w-1/2 min-h-dvh absolute right-0 top-0 flex flex-col justify-center items-center gap-4'>
				{login ? (
					<FormTitles subtitle='Login with social platforms' title='Login' />
				) : (
					<MiddleScreenContent
						buttonAction={() => setLogin(true)}
						img='/rocket.webp'
						paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit'
						textButton='Login'
						title='One of us'
					/>
				)}
			</div>
		</div>
	)
}

export function FormTitles({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) {
	return (
		<>
			<h2 className='text-4xl font-bold'>{title}</h2>
			<Form inputs={SignUpForm.inputs} sendButton={SignUpForm.sendButton} />
			<h4>{subtitle}</h4>
			<IconsContainer />
		</>
	)
}

export function MiddleScreenContent({
	title,
	paragraph,
	textButton,
	buttonAction,
	img,
}: {
	title: string
	paragraph: string
	textButton: string
	buttonAction: () => void
	img: string
}) {
	return (
		<div className='flex flex-col items-center justify-center text-white'>
			<h2 className='text-5xl font-bold mb-4'>{title}</h2>
			<p>{paragraph}</p>
			<button
				className='border-white border-2 px-5 py-3 rounded-full mt-4 cursor-pointer'
				onClick={buttonAction}
				type='button'
			>
				{textButton}
			</button>
			<img alt='' src={img} />
		</div>
	)
}

export default App
