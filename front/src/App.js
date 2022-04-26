import './App.css';
import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Entrada from './components/EntradaComponent';
import Salida from './components/SalidaComponent';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xml: "",
      xsl: "",
      resultado: ""
    };
    this.setXML = this.setXML.bind(this)
    this.setXSL = this.setXSL.bind(this)
    this.setResultado = this.setResultado.bind(this)

  }
  setXML = (xml) => {
    this.setState({xml: xml.target.value})
  }
  setXSL = (xsl) => {
    this.setState({xsl: xsl.target.value})
  }
  setResultado = (res) => {
    this.setState({resultado: res})
  }

  Transformar = () => {
    const data = { xml: this.state.xml, xsl: this.state.xsl }
    fetch('http://localhost:4000/Transformar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json()).then(resultado => {
      this.setResultado(resultado.xml);
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Entrada setXML={this.setXML} setXSL={this.setXSL} />
        <div>
          <button onClick={this.Transformar} id="boton">Transformar XML</button>
        </div>
        <Salida resultado={this.state.resultado} />
      </div>
    );
  }
} export default App;