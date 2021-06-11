import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryCard(props) {
	return (
		<div>
			<Link to={`/country/${props.id}`}>
				<img src={props.img} />
			</Link>
			<h2>{props.name}</h2>
			<h3>{props.continent}</h3>
		</div>
	);
}
