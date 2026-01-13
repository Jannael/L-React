import type { ReactNode } from 'react'

export type FormProps = {
	inputs: InputProps[]
	sendButton: string
}

export function Form({ inputs, sendButton }: FormProps) {
	return (
		<form className='flex flex-col w-fit gap-4 items-center'>
			{inputs.map((input) => {
				return (
					<Input
						icon={input.icon}
						inputType={input.inputType}
						key={input.placeholder}
						placeholder={input.placeholder}
					/>
				)
			})}
			<button
				className='bg-red-500 w-fit text-white py-4 px-6 rounded-full'
				type='submit'
			>
				{sendButton}
			</button>
		</form>
	)
}

type InputProps = {
	icon: ReactNode
	placeholder: string
	inputType: string
}

export function Input({ icon, placeholder, inputType }: InputProps) {
	return (
		<div className='bg-gray-300 w-fit flex items-center gap-2 rounded-full px-4 text-gray-500'>
			{icon}
			<input
				className='py-3 outline-none'
				placeholder={placeholder}
				type={inputType}
			/>
		</div>
	)
}
