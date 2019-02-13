const express = require('express');
const router = express.Router();
const emplCtrl = require('../controllers/empleado.controller')
router.get('/',emplCtrl.getEmpleados);
router.post('/',emplCtrl.createEmpleado);
router.get('/:id', emplCtrl.getEmpleado);
router.put('/:id',emplCtrl.putEmpleado);
router.delete('/:id',emplCtrl.deleteEmpleado)
module.exports= router;
