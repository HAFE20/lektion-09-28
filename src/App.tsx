import { useState } from 'react';
import './App.css';
import Button from './components/Button'

const App = () => {
	// state-variabel som kommer ihåg om det är light eller dark mode för tillfället
	const [theme, setTheme] = useState<string>('light')
	const [ghostContent, setGhostContent] = useState<string>('Second button')

	const pickLightMode = () => { setTheme('light') }
	const pickDarkMode = () => { setTheme('dark') }

	return (
		<div className={'app ' + theme}>
			<h1> My awesome app </h1>
			<p> Choose theme: </p>
			<button onClick={pickLightMode}> Light </button>
			<button onClick={pickDarkMode}> Dark </button>

			<hr />
			<Button type="primary" content="First button" />
			<Button onClick={() => setGhostContent('Spooky!')} type="ghost" content={ghostContent} />
		</div>
	);
}

export default App;
