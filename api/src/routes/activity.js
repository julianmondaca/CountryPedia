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

	if (act.countries) {
		console.log('estoy en add country');
		let aux = act.countries.split(',');
		aux.map(async (e) => {
			let country = await Country.findByPk(e);
			await country.addActivity([activityCreated]);
		});
	}
	res.send('listo ppaa');
});

module.exports = router;
