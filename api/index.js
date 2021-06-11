//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const axios = require('axios');
const {Country} = require('./src/db');
// Syncing all the models at once.
conn.sync({force: true}).then(() => {
	console.log('comectado');
	server.listen(3001, async () => {
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
		console.log('%s listening at 3001');
	});
});
