import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../media/img.jpg';

import {LandingDiv} from './landingStyle';
export default function LandingPage() {
	return (
		<LandingDiv>
			<h1>CountryPedia</h1>
			<Link to='/home'>
				<button>Home</button>
			</Link>
			<div>
				<h4>BY julian mondaca</h4>
			</div>
		</LandingDiv>
	);
}
