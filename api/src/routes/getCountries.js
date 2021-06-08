const {Router} = require('express');
const router = Router();
const axios = require('axios');

const {Country} = require('../db');

router.get('/', async (req, res) => {
	const countries = await axios.get('https://restcountries.eu/rest/v2/all');

	countries.data.forEach(async (country) => {
		try {
			await Country.create({
				id: country.alpha3Code,
				name: country.name,
				flagImg: country.flag,
				continent: country.region,
				capital: country.capital,
				subregion: country.subregion,
				population: country.population,
			});
		} catch (error) {
			console.log(error);
		}
	});
	return res.send('lesto');
});

module.exports = router;
