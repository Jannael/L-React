export default {
	bg: {
		Main: 'bg-emerald-900',
		Second: 'bg-emerald-950',
	},
	details: {
		metal: {
			text: 'text-slate-400',
			border: 'border-slate-700',
		},
	},
	turtles: {
		leonardo: { mask: 'bg-blue-600', skin: 'bg-emerald-700' },
		raphael: { mask: 'bg-red-600', skin: 'bg-green-800' },
		donatello: { mask: 'bg-purple-600', skin: 'bg-lime-800' },
		michelangelo: { mask: 'bg-orange-500', skin: 'bg-lime-500' },
	},
	ooze: {
		bg: 'bg-lime-400',
		text: 'text-lime-400',
		shadow: 'shadow-[0_0_15px_rgba(163,230,53,0.5)]',
		border: 'border-lime-400',
	},
} as const
