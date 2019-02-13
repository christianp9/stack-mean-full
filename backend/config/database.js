const mongoose = require('mongoose');
const data = require('./data')

mongoose
.connect(`mongodb://${data.usuario}:${data.contrasena}@ds121163.mlab.com:21163/student`,{useNewUrlParser:true})
.then(()=>{console.log('conected to mongo');})
.catch(()=>{console.log('error to conected');})

module.exports= mongoose;