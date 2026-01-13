import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Main.css'

const turtles = [
	{
		mask: styles.turtles.leonardo.mask,
		skin: styles.turtles.leonardo.skin,
		name: 'Leonardo',
		img: '/leonardo.webp',
		content:
			'The courageous leader and devoted student of Master Splinter. Leonardo wields twin katanas and guides his brothers with a strong sense of discipline and honor.',
	},
	{
		mask: styles.turtles.donatello.mask,
		skin: styles.turtles.donatello.skin,
		name: 'Donatello',
		img: '/donatello.png',
		content:
			'The brilliant inventory and tech-genius of the team. Donatello uses his intellect and signature bo staff to solve the most complex problems and defeat enemies.',
	},
	{
		mask: styles.turtles.michelangelo.mask,
		skin: styles.turtles.michelangelo.skin,
		name: 'Michelangelo',
		img: '/mike.webp',
		content:
			'A free-spirited and fun-loving jokester who brings light to the team. Michelangelo masters the nunchucks and is always ready for a pizza party after a battle.',
	},
	{
		mask: styles.turtles.raphael.mask,
		skin: styles.turtles.raphael.skin,
		name: 'Raphael',
		img: '/rafael.png',
		content:
			'The strongest and most hot-headed brother. Raphael is a fierce warrior who wields twin sais, known for his tough attitude and unwavering loyalty to his family.',
	},
]

export function Main() {
	return (
		<div
			className={`
				flex
				w-full min-h-dvh
				justify-center items-center ${styles.bg.Main}
			`}
			id='Main'
		>
			<Swiper
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				className='
					size-7/10
					max-w-5xl
				'
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				pagination
			>
				{turtles.map((turtle) => {
					const { name, img, content, skin, mask } = turtle
					return (
						<SwiperSlide
							className='
								h-full
							'
							key={name}
						>
							<SwiperContent
								content={content}
								img={img}
								mask={mask}
								name={name}
								skin={skin}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Main

function SwiperContent({
	img,
	name,
	content,
	skin,
	mask,
}: {
	img: string
	name: string
	content: string
	skin: string
	mask: string
}) {
	return (
		<div
			className={`
				flex flex-col
				h-[60dvh]
				sm:h-[50dvh]
				p-10
				rounded-3xl
				gap-2 justify-center items-center ${skin}
				sm:flex-row
			`}
		>
			<img
				alt={name}
				className='
					w-5/10
					sm:h-7/10
					sm:object-contain
				'
				src={img}
			/>
			<div
				className='
					flex flex-col
					w-full
					justify-center items-center gap-4
				'
			>
				<h2
					className={`
						${mask} text-white p-4 rounded-3xl
					`}
				>
					{name}
				</h2>
				<p
					className={`
						w-full
						text-balance
					`}
				>
					{content}
				</p>
			</div>
		</div>
	)
}
