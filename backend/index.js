const {json,urlencoded} = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = require('express')();

const {mongoose}=require('./config/database')
//settings
app.set('port',process.env.PORT||3000);
//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:false}));
app.use(cors({origin:'http://localhost:4200'}));

//routes
app.use('/api/empleados',require('./routes/routes.empleados'));
//staring server
app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
})