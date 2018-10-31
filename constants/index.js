const KEY = require('../config.js').config.api_key

const options = {
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=`,
	json: true
}

module.exports = {
	options
}