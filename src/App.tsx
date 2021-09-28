import { useState } from 'react';
import './App.css';

const App = () => {
	// state-variabel som kommer ihåg om det är light eller dark mode för tillfället
	const [theme, setTheme] = useState('light')

	const pickLightMode = () => { setTheme('light') }
	const pickDarkMode = () => { setTheme('dark') }

	return (
		<div className={'app ' + theme}>
			<h1> My awesome app </h1>
			<p> Choose theme: </p>
			<button onClick={pickLightMode}> Light </button>
			<button onClick={pickDarkMode}> Dark </button>
		</div>
	);
}

export default App;
