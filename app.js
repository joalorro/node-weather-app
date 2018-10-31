const request = require('request')
const KEY = require('./config.js').config.api_key
const yargs 

const options = {
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=1301%20lombard%20street%20philadelphia`,
	json: true
}

let lat 
let lng 
let formattedAddress 

request(options, (err, resp, body) => {
	if (!body.results){
		console.log(err)
	} else {
		const locationDetails = body.results[0].locations[0]
		// console.log('response:', resp)
		// console.log(locationDetails)
		lat = locationDetails.latLng.lat
		lng = locationDetails.latLng.lng

		formattedAddress = `${locationDetails.street} ${locationDetails.adminArea5}, ${locationDetails.adminArea3} ${locationDetails.postalCode}`

		console.log('Address: ', formattedAddress)
		console.log('Latitude:', lat)
		console.log('Longitude:', lng)
	}
})