import { useState } from 'react'

const root = document.documentElement

function App() {
	const [theme, setTheme] = useState(true)
	return (
		<Button
			onClick={() => {
				setTheme(!theme)
				const rootStyles = getComputedStyle(root)
				const themeColor = rootStyles.getPropertyValue('--color-theme')
				const contrastColor = rootStyles.getPropertyValue('--color-contrast')

				root.style.setProperty('--color-theme', contrastColor)
				root.style.setProperty('--color-contrast', themeColor)
			}}
		/>
	)
}

function Button({ onClick }: { onClick: () => void }) {
	const [on, setOn] = useState(false)
	const classes = on ? 'left-2' : 'left-17'

	return (
		<button
			className='relative w-32 h-16 border-theme border-2 rounded-full bg-contrast'
			onClick={() => {
				onClick()
				setOn(!on)
			}}
			type='button'
		>
			<div
				className={`rounded-full absolute size-12 border-theme border-2 ${classes} top-1.5 transition-all bg-contrast duration-500`}
			>
				{' '}
			</div>
		</button>
	)
}

export default App
