const express = require('express');
var cors = require('cors')
var format = require('xml-formatter');

const fs = require('fs')
const { exec } = require("child_process");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());
app.use(cors())


app.post("/Transformar", (request, response) => {
  fs.writeFile('Entrada.xml', request.body.xml, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
  fs.writeFile('Derivador_simbolico.xsl', request.body.xsl, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })

  exec("node node_modules/xslt3/xslt3.js -t -xsl:Derivador_simbolico.xsl -s:Entrada.xml -o:Salida.xml", (error, stdout, stderr) => {
    if (error) {
      console.log('error:');
      return;
    }
    if (stderr) {
      console.log(stderr);
      fs.readFile('Salida.xml', 'utf-8', (err, data) => {
        if (err) {
          console.log('error: ', err);
        } else {
          response.send({ xml: format(data) });
        }
      });
      return;
    }

  });

});

app.listen(4000, () => console.log("Servidor ejecutandose en el puerto 4000..."));

