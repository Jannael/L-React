import type { ReactNode } from 'react'
import { FacebookIcon, GoogleIcon, LinkedinIcon, TwitterIcon } from '../icons'

const icons = [
	{ icon: FacebookIcon, key: 'Facebook' },
	{ icon: GoogleIcon, key: 'Google' },
	{ icon: LinkedinIcon, key: 'Linkedin' },
	{ icon: TwitterIcon, key: 'TwitterIcon' },
]

export function IconsContainer() {
	return (
		<div className='flex gap-2'>
			{icons.map((icon) => {
				return <IconButton key={icon.key}> {icon.icon()} </IconButton>
			})}
		</div>
	)
}

export function IconButton({ children }: { children: ReactNode }) {
	return (
		<button className='p-4 border-gray-800 border-2 rounded-full' type='button'>
			{children}
		</button>
	)
}
