import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
	return (
		<div className='App'>
			<div className='App-footer'>
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</div>
		</div>
	);
}

export default Footer;