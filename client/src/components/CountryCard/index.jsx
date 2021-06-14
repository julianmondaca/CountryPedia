import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryCard(props) {
	return (
		<div>
			<Link to={`/countryDetail/${props.id}`}>
				<img src={props.img} alt='image not found' />
			</Link>
			<h2>{props.name}</h2>
			<h3>{props.continent}</h3>
		</div>
	);
}
