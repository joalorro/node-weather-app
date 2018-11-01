// const yargs = require('yargs')
// const geocode = require('./geocode/geocode.js')

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('h', 'help')
// 	.argv

// geocode.geocodeAddress(argv.address, (err,res) => {
// 	if (err){
// 		console.log(err)
// 	} else {
// 		console.log(JSON.stringify(res, undefined, 2))
// 	}
// })

const request = require('request')

request({
	url: 'https://api.darksky.net/forecast/d627fbab84ac3c16e0255876113dda3d/40.972413,-73.958884',
	json: true
}, (err, resp, body) => {
	if (!err && resp.statusCode === 200) {
		console.log('Current temperature in Closter, NJ:', body.currently.temperature + ' degrees F')
	} else {
		console.log('Unable to fetch weather')
	}
	
})