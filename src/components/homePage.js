"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Slide = require('./slides/homeslide');

var Home = React.createClass({
	render: function(){
		return (
			<div className="portada">
				<Encabezado></Encabezado>
				<Slide></Slide>
			</div>
		);
	}
});

var Encabezado = React.createClass({
	render: function(){
		return (
			<div className="encabezado">
				<div>
					<i className="fa fa-diamond" aria-hidden="true"></i>
					<b>DIAMOND</b>
					<br/>
					<span>JEWELRY ONLINE STORE</span>
				</div>
				<div>
					<p>TEL:</p>
					<span>771-23-87-89-99</span>
					<div>
						<i className="fa fa-facebook-official" aria-hidden="true"></i>
						<i className="fa fa-twitter" aria-hidden="true"></i>
						<i className="fa fa-youtube-square" aria-hidden="true"></i>
						<i className="fa fa-pinterest-square" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Home;