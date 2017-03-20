"use strict";

var React = require('react');


var HomeSlide = React.createClass({
    getInitialState: function() {
        return {
            promociones: [
                {
                    titulo: "Anillos",
                    precio: "$ 499.00",
                    img: "/joyeria/images/anillo.png"

                },
                {
                    titulo: "Amuletos",
                    precio: "$ 1,500.00",
                    img: "/joyeria/images/pulsera.png"

                },
                {
                    titulo: "Figuras",
                    precio: "$ 879.00",
                    img: "/joyeria/images/figure.png"

                }
            ]
        };
    },

    render: function(){
        return (
            <div className="promos">
                <div className="row">
                    <div className="col-lg-4">
                    <Promocion
                        titulo={this.state.promociones[0].titulo}
                        precio={this.state.promociones[0].precio}
                        img={this.state.promociones[0].img}
                    ></Promocion>
                    </div>
                    <div className="col-lg-4">
                    <Promocion
                        titulo={this.state.promociones[1].titulo}
                        precio={this.state.promociones[1].precio}
                        img={this.state.promociones[1].img}
                    ></Promocion>
                    </div>
                    <div className="col-lg-4">
                    <Promocion
                        titulo={this.state.promociones[2].titulo}
                        precio={this.state.promociones[2].precio}
                        img={this.state.promociones[2].img}
                    ></Promocion>
                    </div>
                </div>
            </div>
        );
    }
});


var Promocion = React.createClass({
    render: function(){
        return (
            <div className="promo-item">
                <img width="300" src={this.props.img} alt=""/>
                <p>{this.props.titulo}</p>
                <span>{this.props.precio}</span>
            </div>
        );
    }
});

module.exports = HomeSlide;