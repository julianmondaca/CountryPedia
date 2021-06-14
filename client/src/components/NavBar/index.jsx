import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
	return (
		<div>
			<h1>CountryPedia</h1>
			<Link to='/home'>
				<button>Home</button>
			</Link>
			<Link to='/form'>
				<button>Create an activity</button>
			</Link>
		</div>
	);
}
