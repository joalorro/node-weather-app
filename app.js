const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather')

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

const weatherMessage = (err,res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(`It's currently ${res.temperature} deg F, but it feels like ${res.apparentTemperature} deg F.`)
	}
}

geocode.geocodeAddress(argv.address, (err,res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res.address)
		weather.getWeather(res.lat,res.lng, weatherMessage)
	}
})