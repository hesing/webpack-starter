import {login} from "./login";
require("../css/bootstrap.css");
require("../scss/app.scss");
var React = require("react");
var angular = require("angular");

login("hemant", '123');

console.log("App LOaded");

document.getElementById("me").src = require("../images/me.png");

$("#me").html("It's Me");

var HelloWorld = React.createClass({
	render: function(){
		return(
				<p className="lead text-info"> I am react Hello World </p>
			);
	}
});
var app = angular.module("myApp", []);

require("./services/UserService")(app);
require("./directives/user-list")(app);

React.render(<HelloWorld />, $("#hello")[0]);