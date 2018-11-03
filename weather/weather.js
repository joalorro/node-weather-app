const request = require('request')
const weatherAPI = require('../config').config.weatherAPI

const getWeather = (lat, lng, cb) => {
	
	const options = {
		url: `https://api.darksky.net/forecast/${weatherAPI}/${lat},${lng}`,
		json: true
	}
	request(options, (err, resp, body) => {
		if (!err && resp.statusCode === 200) {
			cb(null, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
		} else {
			cb('Unable to fetch weather')
		}
	})
}

module.exports.getWeather = getWeather