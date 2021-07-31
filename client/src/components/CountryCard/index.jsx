import React from 'react';
import {Link} from 'react-router-dom';
import {CardDiv} from './cardStyle';

export default function CountryCard(props) {
	return (
		<CardDiv>
			<Link to={`/countryDetail/${props.id}`}>
				<img className='styledImg' src={props.img} alt='not found' />
			</Link>
			<h2 className='styleTxt'>{props.name}</h2>
			<h3 className='styleTxt'>{props.continent}</h3>
		</CardDiv>
	);
}
