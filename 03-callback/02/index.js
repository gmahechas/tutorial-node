const { getUserById } = require('./model');

const start = async () => {
	try {
		const userId = 3;
		const user = await getUserById(userId);
		console.log(user);
	} catch (error) {
		console.log(Object.getOwnPropertyNames(error));
		console.log(Object.getOwnPropertyDescriptors(error));
	}
}

module.exports = start;