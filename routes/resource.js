
var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var garden_controller = require('../controllers/garden');

router.get('/', api_controller.api);

router.post('/gardens', garden_controller.garden_create_post);

router.delete('/gardens/:id', garden_controller.garden_delete);

router.put('/gardens/:id', garden_controller.garden_update_put);

router.get('/gardens/:id', garden_controller.garden_detail);

router.get('/gardens', garden_controller.garden_list);

module.exports = router;
