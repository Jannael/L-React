// cspell:disable

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
	useGSAP(() => {
		gsap.to('#bg', {
			scrollTrigger: {
				scrub: 1,
			},
			scale: 1.5,
		})
		gsap.to('#goku', {
			scrollTrigger: {
				scrub: 1,
			},
			scale: 0.7,
		})
		gsap.to('#cloud1', {
			scrollTrigger: {
				scrub: 1,
			},
			scale: 1.2,
		})
		gsap.to('#cloud2', {
			scrollTrigger: {
				scrub: 1,
			},
			scale: 1.2,
		})
	})
	return (
		<section>
			<div className='bg'>
				<h1 className='title'>SCROLL</h1>
				<img alt='' id='bg' src='/fondo.jpg' />
				<img alt='' id='cloud1' src='/clouds_1.png' />
				<img alt='' id='cloud2' src='/clouds_2.png' />
				<img alt='' id='goku' src='/goku.png' />
			</div>
			<article>
				<div className='container'>
					<h2>TITULO</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						consectetur, fugit doloremque, quo vel eum dolor animi quibusdam
						harum, sunt eveniet nesciunt explicabo molestiae veritatis aliquid
						soluta nam! Sunt, aspernatur! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Cumque, facere itaque. Blanditiis
						beatae illum sunt, tenetur temporibus, unde officia sapiente tempore
						natus incidunt inventore cupiditate perferendis accusamus quidem
						architecto rem. Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Commodi voluptatibus similique nisi quo, sapiente dignissimos
						magni? Nisi magni totam alias ratione, sint, quos esse fugiat eos
						natus veritatis expedita tenetur
					</p>
				</div>
			</article>
		</section>
	)
}

export default App
