import { useState } from 'react'
import { CloseMenuIcon, MenuIcon } from '../icons'
import styles from '../styles'

const sections = [
	{ text: 'Main', href: '#Main' },
	{ text: 'Villains', href: '#Villains' },
	{ text: 'Mutagen', href: '#Mutagen' },
]

export function SideBar() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div
				className={`
				z-20
				flex
				w-full
				fixed top-0 ${styles.bg.Second} justify-center items-center
				sm:h-1/20
			`}
			>
				<nav
					className={`
					flex flex-col
					w-full max-w-7xl
					p-8
					text-center
					rounded-bl-3xl rounded-br-3xl
					transition-top
					gap-8 justify-center items-center fixed duration-700 ${styles.bg.Second}
					${open ? 'top-0' : '-top-9/10'}
					sm:rounded-none sm:top-0
					sm:p-0
						${styles.ooze.text}
				`}
				>
					<ul
						className={`
						flex flex-col
						w-full
						gap-2
						sm:flex-row sm:justify-evenly
					`}
					>
						{sections.map((section) => {
							return (
								<SideBarItem
									href={section.href}
									key={section.href}
									onClick={() => setOpen(false)}
									text={section.text}
								/>
							)
						})}
					</ul>
					<button
						className='
						cursor-pointer
						sm:hidden
					'
						onClick={() => setOpen(false)}
						type='button'
					>
						<CloseMenuIcon />
					</button>
				</nav>

				{!open && (
					<button
						className='
						w-1/10 h-/10 max-w-10
						m-6
						cursor-pointer
						fixed right-0 top-0
						sm:hidden
					'
						onClick={() => setOpen(true)}
						type='button'
					>
						<MenuIcon />
					</button>
				)}
			</div>
			{open && (
				<button
					className='w-full min-h-dvh z-10 fixed top-0 left-0'
					onClick={() => setOpen(false)}
					type='button'
				></button>
			)}
		</>
	)
}

export default SideBar

export function SideBarItem({
	text,
	href,
	onClick,
}: {
	text: string
	href: string
	onClick: () => void
}) {
	return (
		<li
			className={`
				border-2 rounded-4xl
				${styles.ooze.border}
				sm:w-1/4 sm:rounded-none sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:border-b-2
			`}
		>
			<a
				className='
					block
					w-full h-full
					px-4 py-3
					sm:py-1
				'
				href={href}
				onClick={onClick}
			>
				{text}
			</a>
		</li>
	)
}
