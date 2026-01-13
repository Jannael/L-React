import { type JSX, type MouseEventHandler, useRef, useState } from 'react'
import {
	CloseSvg,
	HomeSvg,
	MessagesSvg,
	OpenSvg,
	PhotosSvg,
	SettingsSvg,
} from './icons.tsx'

const buttons = [
	{
		bg: 'bg-[#3f7]',
		textColor: 'text-[#3f7]',
		text: 'Home',
		svg: <CloseSvg />,
	},
	{
		bg: 'bg-[#3f7]',
		textColor: 'text-[#3f7]',
		text: 'About',
		svg: <HomeSvg />,
	},
	{
		bg: 'bg-[#3f7]',
		textColor: 'text-[#3f7]',
		text: 'Messages',
		svg: <MessagesSvg />,
	},
	{
		bg: 'bg-[#3f7]',
		textColor: 'text-[#3f7]',
		text: 'Photos',
		svg: <PhotosSvg />,
	},
	{
		bg: 'bg-[#3f7]',
		textColor: 'text-[#3f7]',
		text: 'Settings',
		svg: <SettingsSvg />,
	},
]

function App() {
	const [open, setOpen] = useState(false)
	const asideWidth = open ? 'w-[200px]' : 'w-[60px]'

	return (
		<aside
			className={`h-3/4 bg-gray-200 ml-3.5 rounded-xl flex flex-col ${asideWidth}`}
		>
			<div className='mt-4 ml-4'>
				<button
					className='cursor-pointer'
					onClick={() => setOpen(!open)}
					type='button'
				>
					{open ? <CloseSvg /> : <OpenSvg />}
				</button>
			</div>
			<SideBarButtons isOpen={open} />
		</aside>
	)
}

export default App

function SideBarButtons({ isOpen }: { isOpen: boolean }) {
	const applyPadding = isOpen ? 'pl-8' : 'pl-3'
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<article
			className={`flex flex-col justify-evenly items-right h-full ${applyPadding}`}
		>
			{buttons.map((btn) => {
				const { text, svg, textColor, bg } = btn
				const classesButton = `relative -top-2 -right-2 ${textColor}`
				const classesSvg = `${bg} text-black`

				return (
					<SideBarButton
						extraClassesBtn={selected === text ? classesButton: ''}
						extraClassesSvg={selected === text ? classesSvg : ''}
						key={text}
						onClick={() => {
							setSelected(text)

						}}
						text={isOpen ? text : ''}
					>
						{svg}
					</SideBarButton>
				)
			})}
		</article>
	)
}

function SideBarButton({
	children,
	text,
	onClick,
	extraClassesSvg,
	extraClassesBtn
}: {
	children: JSX.Element
	text: string
	onClick: MouseEventHandler<HTMLButtonElement>
	extraClassesSvg: string
	extraClassesBtn: string
}) {
	return (
		<button
			className={`flex justify-center items-center gap-2 w-fit text-2xl ${extraClassesBtn} transition-all top-0`}
			onClick={onClick}
			type='button'
		>
			<div className={`text-black rounded-sm p-1.5 ${extraClassesSvg} transition-all top-0`}>
				{children}
			</div>
			{text}
		</button>
	)
}
