const user = {
	id: 7,
	getUser() {
		const testFunc = () => {
			console.log(this)
		}

		testFunc()
	}
}
user.getUser();