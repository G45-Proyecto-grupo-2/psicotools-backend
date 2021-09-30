/* 

    La carpeta "node_modules" no fue incluida en el repositorio
    recuerde instalar todas las dependencias primeramente

*/


/* Require */
const express = require('express')
const app = express()
const port = 3000

/* Middlewares */


/* Config */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})