import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function App() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<AnimatePresence>{open && <Modal />}</AnimatePresence>
			<button
				className='mt-5 size-12 cursor-pointer rounded-full bg-red-500 top-0 transition-all duration-500'
				onClick={() => setOpen(!open)}
				type='button'
			>
				X
			</button>
		</>
	)
}

function Modal() {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0, scale: 1, display: 0 }}
			className="
    w-70
    relative
    bg-emerald-500 
    p-5 
    rounded-sm 
    after:content-[''] 
    after:block 
    after:size-4 
    after:bg-emerald-500
    after:absolute
    after:right-1/2
    after:translate-x-1/2
    after:-bottom-2
    after:rotate-45
    "
			exit={{ opacity: 0, scale: 0.95, display: 1 }}
			initial={{ opacity: 0, y: 10, scale: 0.95 }}
		>
			<h1 className='font-bold'>PROJECT</h1>
			<p className='text-balance text-sm'>
				{/* cspell:disable-next-line */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
				{/* cspell:disable-next-line */}
				officiis consequuntur vero voluptatem earum, mollitia in, sint nihil
				{/* cspell:disable-next-line */}
				culpa repudiandae cupiditate quis aut neque a porro laborum iusto
				{/* cspell:disable-next-line */}
				assumenda?
			</p>
		</motion.div>
	)
}

export default App
