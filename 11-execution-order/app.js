console.log('Inicio de programa');

setTimeout(() => {
	console.log('Primer Timeout');
}, 3000);


setTimeout(() => {
	console.log('Segundo Timeout');
}, 0);


setTimeout(() => {
	console.log('Tercer Timeout');
}, 0);

(() => {
	setTimeout(() => {
		Promise.resolve(console.log('Segunda promise')) 
	}, 0);
})()

Promise.resolve().then(() => console.log('Primer promise'))


console.log('Fin de programa');