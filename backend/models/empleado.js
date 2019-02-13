const DB = require('../config/database');


const empleados_model = DB.Schema({
    name: { type: String, },
    posittion: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = DB.model('crud', empleados_model)