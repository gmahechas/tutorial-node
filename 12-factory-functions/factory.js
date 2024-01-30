
function makePerson(uuid) {
	return ({ name, birthYear }) => {
		return {
			id: uuid(),
			name,
			birthYear,
			age: new Date().getFullYear() - birthYear,
		};
	}
}

module.exports = makePerson;