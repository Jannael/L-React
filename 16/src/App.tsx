import { EffectCards, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

export default function App() {
	return (
		<Swiper
			className='mySwiper'
			effect={'cards'}
			grabCursor
			loop
			modules={[EffectCards, Pagination]}
			pagination
		>
			<SwiperSlide>
				<img alt='' src='/gohan.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img alt='' src='/gohen.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img alt='' src='/goku.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img alt='' src='/trunks.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img alt='' src='/vegueta.jpg' />
			</SwiperSlide>
		</Swiper>
	)
}
