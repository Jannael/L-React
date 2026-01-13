import {
	type MouseEventHandler,
	type ReactNode,
	useEffect,
	useState,
} from 'react'
import { CloseMenuIcon, MenuIcon } from '../icons'

const navbarItems = [
	{ href: '/', content: 'Home' },
	{ href: '/', content: 'Menu' },
	{ href: '/', content: 'About' },
	{ href: '/', content: 'Contact' },
]

export function Navbar() {
	const [open, setOpen] = useState(true)

	useEffect(() => {
		const ctrl = new AbortController()
		window.addEventListener('resize', () => setOpen(true), ctrl)

		return () => ctrl.abort()
	}, [])

	return (
		<header className='flex justify-between items-center mt-12 w-full m-auto px-12'>
			<img alt='' className='size-2/18 max-w-20 h-full object-contain' src='/logo.png' />
			<nav
				className={`
					md:h-full
					md:relative
					md:flex-row
					md:bg-transparent
					sm:h-full
					sm:items-center
					w-4/10 
					h-dvh 
					flex 
					flex-col 
					justify-center 
					gap-2 
					bg-light 
					absolute 
					top-0 
					text-center
					transition-right
					duration-1000
					${open ? 'right-0' : '-right-4/10'}`}
			>
				{navbarItems.map((item) => (
					<NavbarItem
						content={item.content}
						key={item.content}
						path={item.href}
					/>
				))}
			</nav>
			{open && (
				<NavbarBtn aria-expanded={true} onClick={() => setOpen(false)}>
					<CloseMenuIcon />
				</NavbarBtn>
			)}
			{!open && (
				<NavbarBtn aria-expanded={false} onClick={() => setOpen(true)}>
					<MenuIcon />
				</NavbarBtn>
			)}
		</header>
	)
}

export default Navbar

export function NavbarItem({
	path,
	content,
}: {
	path: string
	content: string
}) {
	return (
		<a className='text-txt text-2xl' href={path}>
			{content}
		</a>
	)
}

export function NavbarBtn({
	onClick,
	children,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>
	children: ReactNode
}) {
	return (
		<button
			className='md:hidden text-txt cursor-pointer size-2/18 z-10'
			onClick={onClick}
			type='button'
		>
			{children}
		</button>
	)
}
