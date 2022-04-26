import React, { Component } from 'react';

class Entrada extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="div-entrada">
                <div id="div-xml">
                    Codigo XML:
                    <textarea onChange={this.props.setXML} id="code-xml" ></textarea>
                </div>
                <div id="div-xsl">
                    Codigo XSLT:
                    <textarea onChange={this.props.setXSL} id="code-xsl" ></textarea>
                </div>
            </div>
        );
    }
} export default Entrada;