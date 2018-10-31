const getUser = (id, cb) => {
	const user = {
		id,
		name: 'Jerboi'
	}
	setTimeout( () => {
		cb(user)
	}, 3000)
}

getUser(31, (userObj) => {
	console.log(userObj)
})