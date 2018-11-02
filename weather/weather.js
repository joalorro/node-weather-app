const request = require('request')
const weatherAPI = require('../config').weatherAPI

const getWeather = (lat,lng, cb) => {
	request({
		url: `https://api.darksky.net/forecast/${weatherAPI}/${lat},${lng}`,
		json: true
	}, (err, resp, body) => {
		if (!err && resp.statusCode === 200) {
			cb(null, 'Current temperature in Closter, NJ:', body.currently.temperature + ' degrees F')
		} else {
			cb('Unable to fetch weather')
		}
	})
}

module.exports.getWeather = getWeather