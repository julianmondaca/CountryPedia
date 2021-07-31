import React from 'react';
import {Link} from 'react-router-dom';


import {LandingDiv} from './landingStyle';
export default function LandingPage() {
	return (
		<LandingDiv>
			<h1>CountryPedia</h1>
			<Link to='/home' className='link'>
				<button className='landingBtn'>Home</button>
			</Link>
			<div className='nameDiv'>
				<h4>BY julian mondaca</h4>
			</div>
		</LandingDiv>
	);
}
