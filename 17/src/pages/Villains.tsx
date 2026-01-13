import { useEffect, useState } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const villains = [
	{
		img: '/crank.png',
		name: 'Crank',
		description:
			'Un cerebro alienígena de la Dimensión X que opera desde el interior de un cuerpo robótico gigante para conquistar la Tierra.',
		bg: 'bg-rose-500',
	},
	{
		img: '/Shredder.png',
		name: 'Shredder',
		description:
			'El despiadado líder del Clan del Pie y maestro del ninjutsu, cuya armadura con cuchillas lo convierte en el archienemigo de las Tortugas.',
		bg: 'bg-slate-800',
	},
]

export function Villains() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkSize = () => setIsMobile(window.innerWidth < 768)
		checkSize()
		window.addEventListener('resize', checkSize)
		return () => window.removeEventListener('resize', checkSize)
	}, [])

	return (
		<div
			className={`
				flex
				w-full min-h-dvh
				${styles.bg.Main} justify-center items-center
			`}
			id='Villains'
		>
			<div
				className='
					flex
					w-full min-h-dvh max-w-7xl
					justify-center items-center
				'
			>
				{isMobile ? (
					<Swiper
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
						}}
						centeredSlides={true}
						className='
							w-8/10
						'
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						effect={'coverflow'}
						grabCursor={true}
						modules={[EffectCoverflow, Pagination, Autoplay]}
						pagination={true}
						slidesPerView={'auto'}
					>
						{villains.map((villain) => {
							const { img, name, description, bg } = villain

							return (
								<SwiperSlide key={name}>
									<VillainsSlide
										bg={bg}
										description={description}
										img={img}
										name={name}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				) : (
					villains.map((villain) => {
						const { img, name, description, bg } = villain

						return (
							<VillainsSlide
								bg={bg}
								description={description}
								img={img}
								key={name}
								name={name}
							/>
						)
					})
				)}
			</div>
		</div>
	)
}

export function VillainsSlide({
	img,
	name,
	description,
	bg,
}: Record<string, string>) {
	return (
		<div
			className={`
				flex flex-col
				h-[50dvh]
				text-center text-white
				gap-4 ${bg}
        p-8
        rounded-3xl
        sm:m-10
			`}
		>
			<img alt={name} className='h-5/10 object-contain' src={img} />
			<h2
				className='
					text-3xl
				'
			>
				{name}
			</h2>
			<p>{description}</p>
		</div>
	)
}
