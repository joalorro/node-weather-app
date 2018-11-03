const MAP_API = require('../config.js').config.mapAPI
const WEATHER_API = require('../config.js').config.weatherAPI

const geoOptions = {
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${MAP_API}&location=`,
	json: true
}

const weatherOptions = {
	url: `https://api.darksky.net/forecast/${WEATHER_API}`,
	json: true
}

module.exports = {
	geoOptions,
	weatherOptions
}