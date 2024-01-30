function uuidTwo() {
	const randomNumber = Math.floor(Math.random() * 10000);
	const randomNumber4Digits = String(randomNumber).padStart(5, '0');
	return randomNumber4Digits;
}

module.exports = uuidTwo;