import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import filtro from '../../utils/filtros';
import paginado from '../../utils/paginado';
import NavBar from '../NavBar/index';
import SearchBar from '../SearchBar';
import CountryCard from '../CountryCard/index';
import {CardContainer, HomeDiv} from './homeStyle';
import {getCountries} from '../../actions';

export default function Home(props) {
	const dispatch = useDispatch();
	const [filt, setFilt] = useState('all');
	const [page, setPage] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [pagina, setPagina] = useState(0);
	const countries = useSelector((store) => store.countries);

	const activities = useSelector((store) => store.activities);

	useEffect(() => {
		dispatch(getCountries('', 'ASC', 'all'));
	}, []);

	useEffect(() => {
		if (filtered.length > 0) {
			setPage(paginado(filtered));
		} else if (countries.length > 0) {
			setPage(paginado(countries));
		}
	}, [countries, filt]);

	useEffect(() => {
		if (filt == 'all') {
			setFiltered([]);
		} else {
			setFiltered(filtro(countries, filt));
		}
	}, [filt]);

	const handlePage = (e) => {
		if (page[e]) {
			setPagina(e);
		}
	};

	const handleInputChange = (e) => {
		setFilt(e.target.value);
	};

	return (
		<HomeDiv>
			<NavBar />
			<div className='search'>
				<SearchBar />
				<div className='filtro'>
					<label>search by continent</label>
					<select className='filtSelect' onChange={handleInputChange}>
						<option value='all'>all</option>
						<option value='Americas'>Americas</option>
						<option value='Polar'>Polar</option>
						<option value='Europe'>Europe</option>
						<option value='Africa'>Africa</option>
						<option value='Oceania'>Oceania</option>
					</select>
					<label>search by activity</label>
					<select className='filtSelect' onChange={handleInputChange}>
						<option value='all'>all</option>
						{activities &&
							activities.map((act) => {
								return <option value={act.name}>{act.name}</option>;
							})}
					</select>
				</div>
			</div>
			<h2 className='countriesH2'>Countries</h2>
			<CardContainer>
				{page.length > 0 ? (
					page[pagina].map((e) => {
						return (
							<CountryCard
								key={e.id}
								name={e.name}
								continent={e.continent}
								id={e.id}
								img={e.flagImg}
							/>
						);
					})
				) : (
					<div>search some countries</div>
				)}
			</CardContainer>
			<div className='homeButton'>
				<button className='btn' value={0} onClick={() => handlePage(0)}>
					first
				</button>
				<button
					className='btn'
					value={pagina - 1}
					onClick={() => handlePage(pagina - 1)}
				>
					prev
				</button>
				<button
					className='btn'
					value={pagina + 1}
					onClick={() => handlePage(pagina + 1)}
				>
					next
				</button>
				<button
					className='btn'
					value={page.length - 1}
					onClick={() => handlePage(page.length - 1)}
				>
					last
				</button>
			</div>
		</HomeDiv>
	);
}
