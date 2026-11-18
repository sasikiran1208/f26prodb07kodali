
var express = require('express');
var router = express.Router();

var garden_controller = require('../controllers/garden');

router.get('/', garden_controller.garden_view_all_Page);

// Show one garden using the ID in the query string.
router.get('/detail', garden_controller.garden_view_one_Page);

/* GET create garden page */
router.get('/create', garden_controller.garden_create_Page);

/* GET create update page */
router.get('/update', garden_controller.garden_update_Page);


/* GET delete garden page */
router.get('/delete', garden_controller.garden_delete_Page);


module.exports = router;
