const { promisify } = require('util');

const users = [
	{
		id: 1,
		name: 'John'
	},
	{
		id: 2,
		name: 'Jane'
	}
];


const getUserById = (id, callback) => {
	const user = users.find(user => user.id === id);

	if (!user) {
		return callback(new Error(`The user with id ${id} doesn't exist in the database`));
	}

	return callback(null, user);
}

module.exports = {
	getUserById: promisify(getUserById),
}