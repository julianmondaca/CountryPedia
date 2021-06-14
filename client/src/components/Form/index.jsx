import React from 'react';
import NavBar from '../NavBar/index';
import {useDispatch} from 'react-redux';
import {postActivity} from '../../actions';

export default function Form(props) {
	const dispatch = useDispatch();
	const obj = {
		id: 1,
		name: 'surf',
		difficulty: 2,
		duration: '8hs',
		season: 'winter',
		countries: 'ARG,DZA,CHL',
	};
	const obj2 = {
		id: 1,
		name: ' ski',
		difficulty: 2,
		duration: '8hs',
		season: 'winter',
		countries: 'ARG,DZA,CHL',
	};
	return (
		<div>
			<NavBar />
			<h1>CountryPedia</h1>
			<h2>create a new activity</h2>
			<button onClick={() => dispatch(postActivity(obj))}>click</button>
			<button
				onClick={() => {
					dispatch(postActivity(obj2));
				}}
			>
				click2
			</button>
		</div>
	);
}
