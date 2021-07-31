import {React, useState, useEffect} from 'react';
import NavBar from '../NavBar/index';
import {useDispatch, useSelector} from 'react-redux';
import {postActivity, getCountries} from '../../actions';
import toTxt from '../../utils/toTxt';
import {FormStyle} from './formStyle';
import validate from '../../utils/validacion';

export default function Form(props) {
	const dispatch = useDispatch();
	const countries = useSelector((store) => store.countries);

	useEffect(() => {
		dispatch(getCountries('', 'ASC', 'all'));
	}, []);

	const [search, setSearch] = useState('');
	const [err, setErr] = useState({
		name: false,
		difficulty: false,
		duration: false,
		season: false,
		countries: true,
		errors: 5,
	});

	const [input, setInput] = useState({
		name: '',
		difficulty: 0,
		duration: '',
		season: '',
		countries: '',
	});

	useEffect(() => {
		let name = err.name !== true;
		console.log(err.name);
		let difficulty = err.difficulty !== true;
		let duration = err.duration !== true;
		let season = err.season !== true;
		let countries = err.countries !== true;
		if (name && difficulty && duration && season && countries) {
			setErr({...err, errors: 0});
		}
	}, [input]);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
		const aux = validate(name, value);
		setErr({...err, [name]: aux});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postActivity(input));
	};
	const setCountries = (e) => {
		let aux = toTxt(input.countries, e.target.value);
		console.log(input.countries);
		setInput({...input, countries: aux});
		setErr({...err, countries: false});
	};

	return (
		<FormStyle>
			<NavBar />
			<h1 className='h22'>Create a new activity</h1>
			<div className='formDiv'>
				<div>
					<label>search a country </label>
					<input onChange={(e) => setSearch(e.target.value)} />
					<button onClick={() => dispatch(getCountries(search))}>search</button>
					<select onChange={setCountries}>
						<option value=''>country</option>
						{countries &&
							countries.map((e) => {
								return (
									<option key={e.id} value={e.id}>
										{e.name}
									</option>
								);
							})}
					</select>
				</div>
				<form onSubmit={handleSubmit} className='principalForm'>
					<label>name</label>
					<input
						className={err.name && 'error'}
						name='name'
						placeholder='example: ski'
						onChange={handleInputChange}
					/>
					<label>difficulty</label>
					<select
						className={err.difficulty && 'error'}
						name='difficulty'
						onChange={handleInputChange}
						placeholder='example: 4hs30min'
					>
						<option value={0}>difficulty</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
					</select>
					<label>duration</label>
					<input
						placeholder='example: 4hs30min'
						className={err.duration && 'error'}
						name='duration'
						onChange={handleInputChange}
					/>
					<label>season</label>
					<select
						className={err.season && 'error'}
						name='season'
						onChange={handleInputChange}
					>
						<option value='season'>season</option>
						<option value='summer'>summer</option>
						<option value='autumn'>autumn</option>
						<option value='winter'>winter</option>
						<option value='spring'>spring</option>
					</select>

					<button
						className={err.errors < 1 ? 'subButton' : 'butonFalse'}
						type='submit'
					>
						Create
					</button>
				</form>
			</div>
		</FormStyle>
	);
}
