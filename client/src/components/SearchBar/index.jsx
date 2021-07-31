import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getCountries} from '../../actions';
import {SearchStyle} from './barStyle';

export default function SearchBar(props) {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		name: '',
		order: 'ASC',
		aux: 'all',
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountries(input.name, input.order, input.aux));
	};
	return (
		<SearchStyle>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Search a country</label>
					<input
						name='name'
						placeholder='country name'
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Order alphabetically</label>
					<select name='order' onChange={handleInputChange}>
						<option value='ASC'>asc</option>
						<option value='DESC'>desc</option>
					</select>
				</div>
				<div>
					<label>Search by: </label>
					<select name='aux' onChange={handleInputChange}>
						<option value='all'>alphabetically</option>
						<option value='population'>population</option>
					</select>
				</div>
				<button className='searcButton' type='submit'>
					SEARCH
				</button>
			</form>
		</SearchStyle>
	);
}
