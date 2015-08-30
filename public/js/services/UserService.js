module.exports = function(ngModule){
	ngModule.factory("UserService", function(){
		return [
			{ name: "hemant", age: 20 },
			{ name: "Varun", age: 56 },
			{ name: "Vinay", age: 22 }
		];
	});
};