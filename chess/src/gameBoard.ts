// x - b = x - black
// x - w = x - white

// r = rook
// k = knight
// b = bishop
// q = queen
// K = king (Capital)
// p = pawn

// STATES
// H = check mate (give this letter to the king when it's in checkmate)
// m = possible move
// P = protected (protect your own pieces from your pieces)

export const startPosition = [
	['rb', 'kb', 'bb', 'qb', 'Kb', 'bb', 'kb', 'rb'],
	['pb', 'pb', 'pb', 'pb', 'pb', 'pb', 'pb', 'pb'],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['pw', 'pw', 'pw', 'pw', 'pw', 'pw', 'pw', 'pw'],
	['rw', 'kw', 'bw', 'qw', 'Kw', 'bw', 'kw', 'rw'],
]

export const gameBoardArray = structuredClone(startPosition)

export const possibleMovesWhite = structuredClone(startPosition)

export const possibleMovesBlack = structuredClone(startPosition)

export const pieces = [
	{ abbreviation: 'rb', img: '/rook-black.webp' },
	{ abbreviation: 'kb', img: '/knight-black.webp' },
	{ abbreviation: 'bb', img: '/bishop-black.webp' },
	{ abbreviation: 'qb', img: '/queen-black.webp' },
	{ abbreviation: 'Kb', img: '/king-black.webp' },
	{ abbreviation: 'pb', img: '/pawn-black.webp' },

	{ abbreviation: 'rw', img: '/rook-white.webp' },
	{ abbreviation: 'kw', img: '/knight-white.webp' },
	{ abbreviation: 'bw', img: '/bishop-white.webp' },
	{ abbreviation: 'qw', img: '/queen-white.webp' },
	{ abbreviation: 'Kw', img: '/king-white.webp' },
	{ abbreviation: 'pw', img: '/pawn-white.webp' },
] as const

export const SpecialStates = [
	{ abbreviation: 'H', className: 'bg-red-500' },
	{ abbreviation: 'P', className: '' },
	{
		abbreviation: 'm',
		className:
			"after:content-[''] after:absolute after:size-6 after:bg-red-500 after:rounded-full",
	},
] as const
