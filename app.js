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

const messageCallback = (err,res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
	}
}

// geocode.geocodeAddress(argv.address, messageCallback)

const lat = 40.972413
const lng = -73.958884
//pass in lat, lng, callback
weather.getWeather(lat,lng, messageCallback)