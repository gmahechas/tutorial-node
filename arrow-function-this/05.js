class MyClass {

	userId;

	constructor() {
		
	}

	start = () => {
			console.log(this); // 'this' se refiere a la instancia de 'MyClass'
	}
}

const myInstance = new MyClass();
myInstance.start();