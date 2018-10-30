console.log('starting')

setTimeout(() => {
	console.log('inside first callback')
}, 2000)

setTimeout(() => {
	console.log('inside second callback')
}, 0)

console.log('ending')