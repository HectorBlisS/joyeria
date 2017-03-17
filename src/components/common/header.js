"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({
	render: function(){
		return (
				<nav className="barra">
					<i className="hamburguesa fa fa-bars" aria-hidden="true"></i>
					<ul>
						<li>INICIO</li>
						<li>PRODUCTOS</li>
						<li>SOBRE NOSOTROS</li>
						<li>CONTACTO</li>
						<hr/>
						<p>Tu carrito: <strong>0 productos</strong></p>
					</ul>


					<p className="copyrights">© 2017 Diamond FixterCo.
						All Rights Reserved.
						Powered by Fixter. </p>
				</nav>
			);
	}
}); 

module.exports = Header;