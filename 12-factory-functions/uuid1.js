function uuidOne() {
	const randomNumber = Math.floor(Math.random() * 10000);
	const randomNumber4Digits = String(randomNumber).padStart(4, '0');
	return randomNumber4Digits;
}

module.exports = uuidOne;