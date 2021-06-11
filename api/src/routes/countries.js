const {Router} = require('express');
const {Op} = require('sequelize');
const router = Router();
const {Country, Activity} = require('../db');
const {route} = require('./getCountries');

const getCountries = require('./getCountries');

// router.use('/setCountries', getCountries);

router.get('/', async (req, res) => {
	const name = req.query.name;
	const order = req.query.order;
	const aux = req.query.aux;
	if (name) {
		const country = await Country.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			},
		});
		return res.send(country);
	}
	if (aux !== 'population') {
		let countries = await Country.findAll({
			include: {model: Activity},
			order: [['name', order]],
		});
		return res.send(countries);
	} else {
		let countries = await Country.findAll({
			include: {model: Activity},
			order: [['population', order]],
		});
		return res.send(countries);
	}
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;
	let country = await Country.findByPk(id, {include: Activity});
	res.send(country);
});

module.exports = router;
