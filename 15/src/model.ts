// https://pokeapi.co/api/v2/pokemon/${id}/
// https://pokeapi.co/api/v2/pokemon/${name}/
// https://pokeapi.co/api/v2/pokemon?limit=10&offset=2

export async function getById({
	signal,
	id,
}: {
	signal: AbortSignal
	id: number
}) {
	const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
		signal,
	})

	if (!request.ok) {
		if (request.status === 404) throw new Error('Not found')
		throw new Error('Something went wrong')
	}

	const response = await request.json()
	return response
}

export async function getByName({
	signal,
	name,
}: {
	signal: AbortSignal
	name: string
}) {
	const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
		signal,
	})

	if (!request.ok) {
		if (request.status === 404) throw new Error('Not found')
		throw new Error('Something went wrong')
	}

	const response = await request.json()
	return response
}

export async function getOffset({
	signal,
	offset,
	limit,
}: {
	signal: AbortSignal
	offset: number
	limit: number
}) {
	const request = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
		{
			signal,
		},
	)

	if (!request.ok) {
		if (request.status === 404) throw new Error('Not found')
		throw new Error('Something went wrong')
	}

	const response = await request.json()
	return response
}
