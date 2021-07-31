const {Router} = require('express');
const router = Router();

const {Activity, Country} = require('../db');

router.post('/', async (req, res) => {
	const act = req.body;
	const activityCreated = await Activity.create({
		name: act.name,
		difficulty: act.difficulty,
		duration: act.duration,
		season: act.season,
	});

	console.log('esta es la activity ' + activityCreated.name);

	if (act.countries) {
		let aux = act.countries.split(',');
		aux.map(async (e) => {
			let country = await Country.findByPk(e);
			console.log('este es el pais ' + country.name);
			await country.addActivity([activityCreated]);
		});
	}
	res.send(activityCreated);
});

module.exports = router;
