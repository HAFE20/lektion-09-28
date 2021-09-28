import './Buttons.css'

interface ButtonProps {
	type: string;
	content: string;
}

const Button = ({ type, content }: ButtonProps) => (
	<button className={'button-common ' + type}> {content} </button>
)

export default Button
