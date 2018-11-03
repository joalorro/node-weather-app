const yargs = require('yargs')
const axios = require('axios')
const options = require('./constants')

const geoOptions = options.geoOptions
const weatherOptions = options.weatherOptions

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true,
			default: '07624'
		}
	})
	.help()
	.alias('h', 'help')
	.argv

const formatAddress = ({street,adminArea5,adminArea3,postalCode}) => {
	return `${street} ${adminArea5}, ${adminArea3} ${postalCode}`
}

geoOptions.url += encodeURIComponent(argv.address)

axios.get(geoOptions.url)
	.then((resp) => {
		if ( !resp.data || !resp.data.results[0].locations[0].adminArea3) {
			throw new Error('Unable to find location')
		}
		const locationDetails = resp.data.results[0].locations[0]
		const { lat,lng } = locationDetails.latLng
		const formattedAddress = formatAddress(locationDetails)

		console.log(formattedAddress)
		weatherOptions.url += `/${lat},${lng}`
		return axios.get(weatherOptions.url)	
	}).then((resp) => {
		const { temperature, apparentTemperature } = resp.data.currently
		console.log(`It's currently ${temperature}. It feels likes ${apparentTemperature}.`)
	})
	.catch((e) => {
		if (!!e.code) {
			console.log('Unable to connect to servers')
		} else {
			console.log(e.message)
		}
	})


