const MAP_KEY = require('../config.js').config.mapAPI

const options = {
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${MAP_KEY}&location=`,
	json: true
}

module.exports = {
	options
}