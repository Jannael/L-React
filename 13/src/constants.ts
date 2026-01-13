import type { FormProps } from './components/Form'
import { EmailIcon, PasswordIcon, UserIcon } from './icons'

export const SignUpForm: FormProps = {
	inputs: [
		{ icon: UserIcon(), placeholder: 'User', inputType: 'text' },
		{ icon: EmailIcon(), placeholder: 'Email', inputType: 'text' },
		{ icon: PasswordIcon(), placeholder: 'Password', inputType: 'text' },
	],
	sendButton: 'SignUp',
}

export const LoginForm: FormProps = {
	inputs: [
		{ icon: UserIcon(), placeholder: 'User', inputType: 'text' },
		{ icon: PasswordIcon(), placeholder: 'Password', inputType: 'text' },
	],
	sendButton: 'Login',
}
