const uuid1 = require('./uuid1');
const uuid2 = require('./uuid2');
const makePerson = require('./factory');

// this should be one for the entire app
const personFactory = makePerson(uuid2); // change for uuid1

const obj = {
	name: 'John',
	birthYear: 1990
};

const jhon = personFactory(obj);
console.log(jhon)