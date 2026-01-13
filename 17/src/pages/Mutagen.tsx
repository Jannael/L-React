import styles from '../styles'

export function Mutagen() {
	return (
		<div
			className={`
				flex
				w-full min-h-dvh
				${styles.ooze.bg} justify-center items-center
			`}
			id='Mutagen'
		>
			<div
				className='
					flex
					w-full min-h-dvh max-w-7xl
					justify-center items-center
				'
			>
				<div
					className='
						flex flex-col
            sm:flex-row
						w-8/10
						justify-center items-center gap-8
					'
				>
					<img
						alt='mutagen'
						className='
							w-5/10
						'
						src='/mutagen.webp'
					/>
					<div
						className='
							flex flex-col
							text-center
							gap-8
              sm:-order-1
						'
					>
						<h2
							className='
								text-3xl
							'
						>
							Mutagen
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
							quaerat reiciendis fuga. Repellendus accusamus, quia quidem
							deleniti laboriosam sit eligendi corrupti sint hic modi distinctio
							incidunt similique at quis ullam.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
