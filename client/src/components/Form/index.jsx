import {React, useState, useEffect} from 'react';
import NavBar from '../NavBar/index';
import {useDispatch, useSelector} from 'react-redux';
import {postActivity, getCountries} from '../../actions';
import toTxt from '../../utils/toTxt';

export default function Form(props) {
	const dispatch = useDispatch();
	const countries = useSelector((store) => store.countries);

	useEffect(() => {
		dispatch(getCountries('argentina', 'ASC', 'all'));
	}, []);

	const [search, setSearch] = useState('');

	const [input, setInput] = useState({
		name: '',
		difficulty: 0,
		duration: '',
		season: '',
		countries: '',
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postActivity(input));
	};
	const setCountries = (e) => {
		let aux = toTxt(input.countries, e);
		console.log(input.countries);
		setInput({...input, countries: aux});
	};

	return (
		<div>
			<NavBar />
			<h1>CountryPedia</h1>
			<h2>create a new activity</h2>
			<form onSubmit={handleSubmit}>
				<label>name</label>
				<input
					name='name'
					placeholder='example: ski'
					onChange={handleInputChange}
				/>
				<label>difficulty</label>
				<select
					name='difficulty'
					onChange={handleInputChange}
					placeholder='example: 4hs30min'
				>
					<option value='1'>difficulty</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<label>time</label>
				<input name='duration' onChange={handleInputChange} />
				<label>season</label>
				<select name='season' onChange={handleInputChange}>
					<option value='summer'>summer</option>
					<option value='autumn'>autumn</option>
					<option value='winter'>winter</option>
					<option value='spring'>spring</option>
				</select>

				<button type='submit'>Create</button>
			</form>
			<div>
				<label>search a country</label>
				<input onChange={(e) => setSearch(e.target.value)} />
				<button onClick={() => dispatch(getCountries(search))}>search</button>
				<select name='' id=''>
					<option value=''>country</option>
					{countries &&
						countries.map((e) => {
							return <option value='e.id'>{e.name}</option>;
						})}
				</select>
			</div>
		</div>
	);
}
