/* 

    La carpeta "node_modules" no fue incluida en el repositorio
    recuerde instalar todas las dependencias primeramente

*/


/* Require */
const express = require('express')
const app = express()
var morgan = require('morgan')
/* Database */
const db = "mongodb://"

/* Middlewares */
app.use(morgan("dev"));

/* Config */
app.set('PORT', process.env.PORT || 3000);

/* API */
app.get('/', (req, res) => {
  res.send('Respuesta del desde el servidor')
})

/* PORT */
app.listen(app.get('PORT'), () => {
  console.log(`Example app listening at http://localhost:${app.get('PORT')}`)
});
