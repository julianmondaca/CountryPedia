import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNavBar} from './navStyle';

export default function NavBar(props) {
	return (
		<StyledNavBar>
			<h1>CountryPedia</h1>
			<div className='buttons'>
				<Link to='/home'>
					<button>Home</button>
				</Link>
				<Link to='/form'>
					<button>Create an activity</button>
				</Link>
			</div>
		</StyledNavBar>
	);
}
