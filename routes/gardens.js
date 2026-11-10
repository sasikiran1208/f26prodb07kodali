
var express = require('express');
var router = express.Router();

var garden_controller = require('../controllers/garden');

router.get('/', garden_controller.garden_view_all_Page);

module.exports = router;
