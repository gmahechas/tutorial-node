function regularFunction() {
	console.log(this);
}

const boundFunction = regularFunction.bind({ someKey: 'someValue' });
boundFunction(); // Ahora 'this' se refiere al objeto pasado a 'bind'