export const keyBg = [
	'bg-emerald-900',
	'bg-emerald-800',
	'bg-emerald-600',
	'bg-emerald-400',
	'bg-emerald-300',
]

export const availableKeys: ({
	key: string
	code: string
	grow?: string
	isSelected?: boolean
  isWrong?: boolean
})[][] = [
	[
		{ key: '`', code: 'Backquote' },
		{ key: '1', code: 'Digit1' },
		{ key: '2', code: 'Digit2' },
		{ key: '3', code: 'Digit3' },
		{ key: '4', code: 'Digit4' },
		{ key: '5', code: 'Digit5' },
		{ key: '6', code: 'Digit6' },
		{ key: '7', code: 'Digit7' },
		{ key: '8', code: 'Digit8' },
		{ key: '9', code: 'Digit9' },
		{ key: '0', code: 'Digit0' },
		{ key: '-', code: 'Minus' },
		{ key: '+', code: 'Equal' },
		{ key: 'Backspace', code: 'Backspace', grow: 'grow-[2]' },
	],
	[
		{ key: 'Tab', code: 'Tab', grow: 'grow-[2]' },
		{ key: 'q', code: 'KeyQ' },
		{ key: 'w', code: 'KeyW' },
		{ key: 'e', code: 'KeyE' },
		{ key: 'r', code: 'KeyR' },
		{ key: 't', code: 'KeyT' },
		{ key: 'y', code: 'KeyY' },
		{ key: 'u', code: 'KeyU' },
		{ key: 'i', code: 'KeyI' },
		{ key: 'o', code: 'KeyO' },
		{ key: 'p', code: 'KeyP' },
		{ key: '[', code: 'BracketLeft' },
		{ key: ']', code: 'BracketRight' },
		{ key: '\\', code: 'Backslash' },
	],
	[
		{ key: 'CapsLock', code: 'CapsLock', grow: 'grow-[2]' },
		{ key: 'a', code: 'KeyA' },
		{ key: 's', code: 'KeyS' },
		{ key: 'd', code: 'KeyD' },
		{ key: 'f', code: 'KeyF' },
		{ key: 'g', code: 'KeyG' },
		{ key: 'h', code: 'KeyH' },
		{ key: 'j', code: 'KeyJ' },
		{ key: 'k', code: 'KeyK' },
		{ key: 'l', code: 'KeyL' },
		{ key: ';', code: 'Semicolon' },
		{ key: "'", code: 'Quote' },
		{ key: 'Enter', code: 'Enter', grow: 'grow-[2]' },
	],
	[
		{ key: 'Shift', code: 'ShiftLeft', grow: 'grow-[2]' },
		{ key: 'z', code: 'KeyZ' },
		{ key: 'x', code: 'KeyX' },
		{ key: 'c', code: 'KeyC' },
		{ key: 'v', code: 'KeyV' },
		{ key: 'b', code: 'KeyB' },
		{ key: 'n', code: 'KeyN' },
		{ key: 'm', code: 'KeyM' },
		{ key: ',', code: 'Comma' },
		{ key: '.', code: 'Period' },
		{ key: '/', code: 'Slash' },
		{ key: 'Shift', code: 'ShiftRight', grow: 'grow-[2]' },
	],
	[
		{ key: 'Ctrl', code: 'ControlLeft', grow: 'grow-[1]' },
		{ key: 'Alt', code: 'AltLeft', grow: 'grow-[1]' },
		{ key: 'Space', code: 'Space', grow: 'grow-[6]' },
		// { key: 'Alt', code: 'AltRight', grow: 'grow-[1]' },
		{ key: 'Ctrl', code: 'ControlRight', grow: 'grow-[1]' },
	],
]

export const getRandomKey = () => {
	const availableKeysFlat = availableKeys.flatMap((item) => [...item])
	const randomIndex = Math.floor(Math.random() * availableKeysFlat.length)
	return availableKeysFlat[randomIndex]
}
