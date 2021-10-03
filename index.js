/* 

    La carpeta "node_modules" no fue incluida en el repositorio
    recuerde instalar todas las dependencias primeramente

*/


/* Require */
const express = require('express');
const mongoose = require('mongoose');
const app = express()
var morgan = require('morgan')
const cors = require('cors')

/* Middlewares */
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/* Config */
app.set('PORT', process.env.PORT || 3000);
const passworddb = 'JX5gprpKZmjVVNnC';
const databaseName = 'Psicotools-api';

async function main() {
  await mongoose.connect(`mongodb+srv://jhll:${passworddb}@psicotools-api.05awz.mongodb.net/${databaseName}?retryWrites=true&w=majority`);
}

main().catch((err) => console.log(err));

/* PORT */
app.listen(app.get('PORT'), () => {
  console.log(`Example app listening at http://localhost:${app.get('PORT')}`)
});

// API
