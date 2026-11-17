
var express = require('express');
var router = express.Router();

var garden_controller = require('../controllers/garden');

router.get('/', garden_controller.garden_view_all_Page);

// Show one garden using the ID in the query string.
router.get('/detail', garden_controller.garden_view_one_Page);

module.exports = router;
