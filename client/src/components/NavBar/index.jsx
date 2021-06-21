import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNavBar} from './navStyle';

export default function NavBar(props) {
	return (
		<StyledNavBar>
			<h1>CountryPedia</h1>
			<div className='buttons'>
				<Link to='/home'>
					<button className='btnNav'>Home</button>
				</Link>
				<Link to='/form'>
					<button className='btnNav'>Create an activity</button>
				</Link>
			</div>
		</StyledNavBar>
	);
}
