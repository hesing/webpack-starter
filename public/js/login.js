let login = (username, password) => {
	if(username === "hemant" && password === "123"){
		console.log('LOgged In');
	} else {
		console.log("incorrect Login!");
	}
};

module.exports = {login};