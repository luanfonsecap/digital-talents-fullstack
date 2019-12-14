const express = require('express');
const routes = express.Router();

const SensorController = require('./controllers/SensorController');

routes.get('/sensor', SensorController.index);

routes.post('/sensor', SensorController.store);

routes.put('/sensor/:id/update', SensorController.update);

routes.delete('/sensor/:id/delete', SensorController.delete);

module.exports = routes;
