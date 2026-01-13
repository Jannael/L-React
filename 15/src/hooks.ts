import { useQuery } from '@tanstack/react-query'
import { getByName, getOffset } from './model'

export function usePokemon(input: string | number) {
	const isNameSearch = Number.isNaN(Number(input))
	const { isLoading, data, error } = useQuery({
		queryFn: async ({ signal }: { signal: AbortSignal }) => {
			let response: Record<
				string,
				Record<string, string> | string | Array<Record<string, string>>
			>

			if (isNameSearch)
				response = await getByName({ signal, name: input } as {
					signal: AbortSignal
					name: string
				})
			else
				response = await getOffset({ signal, limit: 1, offset: input } as {
					signal: AbortSignal
					limit: number
					offset: number
				})

			return isNameSearch
				? { name: input, id: Number(response.id) - 1 }
				: {
						name: (() => {
							if (response.results.length === 0)
								throw new Error('This pokemon its not available')

							return (response.results as Array<Record<string, string>>)[0].name
						})(),
						id: input,
					}
		},
		queryKey: ['pokemon', input],
		retry: 0,
	})

	return { isLoading, data, error }
}
