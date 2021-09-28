import './Buttons.css'

interface ButtonProps {
	type: string;
	content: string;
	onClick?: (event: React.MouseEvent) => void;  // onClick är valfri pga '?'
}

const Button = ({ type, content, onClick }: ButtonProps) => (
	<button className={'button-common ' + type}
		onClick={onClick}> {content} </button>
)

/*function Component(props) {
	return ( <jsx /> )
}
const Component = (props) => {
	return (
		<jsx />
	)
}
const Component = (props) => (
	<jsx />
)*/

export default Button
