import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<img src={logo} alt='Holberton' />
				<h1>School dashboard</h1>
			</div>
			
			
		</div>
	);
}

export default Header;