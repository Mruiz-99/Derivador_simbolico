import React, { Component } from 'react';

class Salida extends Component {

    render() {
        return (
            <div id="div-salida">
                Resultado:
                <textarea readOnly id="xml-transformado" value={this.props.resultado}></textarea>
            </div>
        );
    }
} export default Salida;