import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
	return (
		<div>
			<h1>The Dog App</h1>
			<Link to='/home'>
				<button>Home</button>
			</Link>
			<div>
				<h4>BY julian mondaca</h4>
			</div>
		</div>
	);
}
