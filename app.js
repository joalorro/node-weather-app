const request = require('request')
const KEY = require('./config.js').config.api_key
const yargs = require('yargs')

const options = {
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=`,
	json: true
}

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('h', 'help')
	.argv

options.url += encodeURIComponent(argv.address)

request(options, (err, resp, body) => {
	if (resp.statusCode !== 200){
		console.log(err)
	} else {
		const locationDetails = body.results[0].locations[0]
		const lat = locationDetails.latLng.lat
		const lng = locationDetails.latLng.lng
	
		const formattedAddress = `${locationDetails.street} ${locationDetails.adminArea5}, ${locationDetails.adminArea3} ${locationDetails.postalCode}`
	
		console.log('Address: ', formattedAddress)
		console.log('Latitude:', lat)
		console.log('Longitude:', lng)
	}
})