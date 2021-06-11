import {React, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {countryDetail} from '../../actions';
import NavBar from '../NavBar/index';

export default function CountryDetail(props) {
	const dispatch = useDispatch();
	const detail = useSelector((store) => store.countryDetail);

	useEffect(() => {
		const countryId = props.match.params.id;
		dispatch(countryDetail(countryId));
	}, []);

	return (
		<div>
			<NavBar />
			<div>
				<h2>{detail.name}</h2>
				<img src={detail.flagImg} alt='image not found' />
				<div>
					<h3>Capital: {detail.capital}</h3>
				</div>
				<div>
					<h3>Continent: {detail.continent}</h3>
				</div>
				<div>
					<h3>Subregion: {detail.subregion}</h3>
				</div>
				<div>
					<h2>Activities: </h2>
				</div>
				{detail.activities && detail.activities.length > 0 ? (
					detail.activities.map((e) => {
						return (
							<div key={e.id}>
								<h2>{e.name}</h2>
								<div>
									<h2>Difficulty: {e.difficulty}/5</h2>
								</div>
								<div>
									<h2>Season: {e.season}</h2>
								</div>
								<div>
									<h2>Duration: {e.duration}</h2>
								</div>
							</div>
						);
					})
				) : (
					<div>
						<h3>Create some activities</h3>
						<Link to='/form'>
							<button>CREATE</button>
						</Link>
					</div>
				)}
				<div>
					<h4>{detail.id}</h4>
				</div>
			</div>
		</div>
	);
}
