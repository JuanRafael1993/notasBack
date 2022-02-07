const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/Notes'

mongoose.connect(URI).then(() => console.log("conectado a mongo")).catch((error) => console.log("error con la conexion a la base de datos" + error))

module.exports = mongoose