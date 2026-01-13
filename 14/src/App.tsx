import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import debounce from 'just-debounce-it'
import { useEffect, useMemo, useState } from 'react'
import { HumidityIcon, MagnifierIcon, MapsIcon, WindIcon } from './icons'

const apiKey = ''

type dataResponse = {
	main: {
		temp: number
		humidity: string
	}
	weather: Array<{
		description: string
		main: string
	}>
	wind: {
		speed: number
	}
}

// function useWeather() {
// 	const [data, setData] = useState<dataResponse>()
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [error, setError] = useState<Error>()
// 	const abortController = useRef<AbortController | null>(null)

// 	const [inputSearch, setInputSearch] = useState<string>('')

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			abortController.current?.abort()
// 			abortController.current = new AbortController()

// 			setIsLoading(true)

// 			try {
// 				if (inputSearch === '') return
// 				const response = await fetch(
// 					`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&units=metric&appid=${apiKey}`,
// 					{ signal: abortController.current?.signal },
// 				)
// 				const json = await response.json()
// 				if (json.cod === '404') throw new Error('Not found')

// 				setData(json)
// 				setError(undefined)
// 				return json
// 			} catch (e: unknown) {
// 				setData(undefined)
// 				if (e instanceof Error) setError(e)
// 				else setError(new Error('Something went wrong'))
// 			} finally {
// 				setIsLoading(false)
// 			}
// 		}

// 		fetchData()
// 	}, [inputSearch])

// 	return { setInputSearch, data, isLoading, error }
// }

// function useWeather() {
// 	const [inputSearch, setInputSearch] = useState('')

// 	const getWeather = async ({
// 		signal,
// 		queryKey,
// 	}: {
// 		signal: AbortSignal
// 		queryKey: string[]
// 	}) => {
// 		const [_key, city] = queryKey

// 		const request = await fetch(
// 			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
// 			{ signal },
// 		)

// 		const response = await request.json()

// 		if (!request.ok) {
// 			if (response.cod === '404') throw new Error('Not Found')
// 			throw new Error('Something went wrong')
// 		}

// 		return response
// 	}

// 	const { data, isLoading, error } = useQuery({
// 		queryFn: getWeather,
// 		queryKey: ['weather', inputSearch], // dependence on inputSearch if it changes it executes again => this are parameters to the queryFn
// 		enabled: inputSearch.length > 0, // it does not execute unless inputSearch its different from ''
// 		retry: 0, // how many times it will retry it
// 	})

// 	return { setInputSearch, data, isLoading, error }
// }

function useWeather(city: string) {
	const getWeather = async ({
		signal,
		queryKey,
	}: {
		signal: AbortSignal
		queryKey: string[]
	}) => {
		const [_key, city] = queryKey

		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
			{ signal },
		)

		const response = await request.json()

		if (!request.ok) {
			if (response.cod === '404') throw new Error('Not Found')
			throw new Error('Something went wrong')
		}

		return response
	}

	const { data, isLoading, error } = useQuery({
		queryFn: getWeather,
		queryKey: ['weather', city], // dependence on inputSearch if it changes it executes again => this are parameters to the queryFn
		enabled: city.length > 0, // it does not execute unless inputSearch its different from ''
		retry: 0, // how many times it will retry it
	})

	return { data, isLoading, error }
}

function App() {
	const [debounceInput, setDebounceInput] = useState('')
	const { data, isLoading, error } = useWeather(debounceInput)
	const [input, setInput] = useState<string>('')

	const debounceFn = useMemo(
		() => debounce((value: string) => setDebounceInput(value), 500),
		[],
	)

	useEffect(() => {
		return () => {
			debounceFn.cancel()
		}
	}, [debounceFn])

	return (
		<div className='min-h-dvh w-full flex justify-center items-center transition-all duration-1000'>
			<motion.div
				className='w-3/10 max-w-2xs h-auto bg-white p-5 rounded-3xl transition-all duration-1000'
				layout
				transition={{ duration: 1 }}
			>
				<div className='flex gap-2 items-center justify-around'>
					<MapsIcon />
					<input
						className='p-2 w-7/10'
						onChange={(e) => {
							setInput(e.target.value)
							debounceFn(e.target.value)
						}}
						placeholder='Enter your location'
						type='text'
						value={input}
					/>
					<MagnifierIcon />
				</div>
				<AnimatePresence mode='wait'>
					{data !== undefined && isLoading === false && (
						<WeatherScreen
							grades={Math.round(data.main.temp).toString()}
							humidity={data.main.humidity}
							weather={data.weather[0].description}
							weatherMain={data.weather[0].main}
							wind={Math.round(data.wind.speed).toString()}
						/>
					)}

					{isLoading && (
						<NoWeatherScreen img='/loading_animation.gif' title='Loading' />
					)}

					{error !== null && data === undefined && isLoading === false && (
						<NoWeatherScreen img='/404.png' title={error.message} />
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export function WeatherScreen({
	weatherMain,
	grades,
	weather,
	humidity,
	wind,
}: {
	weatherMain: string
	grades: string
	weather: string
	humidity: string
	wind: string
}) {
	let img = ''

	switch (weatherMain) {
		case 'Clear':
			img = '/clear.png'
			break

		case 'Rain':
			img = '/rain.png'
			break

		case 'Snow':
			img = '/snow.png'
			break

		case 'Clouds':
			img = '/cloud.png'
			break

		case 'Haze':
			img = '/mist.png'
			break

		default:
			img = ''
	}

	return (
		<div className='w-full flex justify-center flex-col items-center gap-3'>
			<img alt='' className='w-7/10' src={img} />
			<div className='flex align-top'>
				<span className='text-7xl'>{grades}</span>
				<span className='text-4xl'>°C</span>
			</div>
			<p className='text-xl'>{weather}</p>
			<div className='w-full flex mt-4'>
				<div className='flex justify-center items-center w-1/2 gap-3'>
					<HumidityIcon />
					<div className='flex flex-col text-sm'>
						<span>{humidity}</span>
						<span className='-mt-1.5'>humidity</span>
					</div>
				</div>

				<div className='flex justify-center items-center w-1/2 gap-3'>
					<WindIcon />
					<div className='flex flex-col text-sm'>
						<span>{`${wind} km/h`}</span>
						<span className='-mt-1.5'>humidity</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export function NoWeatherScreen({
	img,
	title,
}: {
	img: string
	title: string
}) {
	return (
		<div>
			<img alt='' src={img} />
			<p>{title}</p>
		</div>
	)
}

export default App
