const request = require('request')
const options = require('../constants').options

const geocodeAddress = (address, cb) => {
	options.url += encodeURIComponent(address)
	request(options, (err, resp, body) => {
		if (resp.statusCode !== 200) {
			cb('Bad Request')
		} else {
			const locationDetails = body.results[0].locations[0]
			const { lat,lng } = locationDetails.latLng
			const formattedAddress = formatAddress(locationDetails)

			cb(null, {
				address: formattedAddress,
				lat,
				lng
			})
		}
	})
}
const formatAddress = ({street,adminArea5,adminArea3,postalCode}) => {
	return `${street} ${adminArea5}, ${adminArea3} ${postalCode}`
}

module.exports.geocodeAddress = geocodeAddress