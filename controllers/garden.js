
var Garden = require('../models/garden');

exports.garden_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden list');
};

exports.garden_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden detail: ' + req.params.id);
};

exports.garden_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden create POST');
};

exports.garden_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden delete DELETE ' + req.params.id);
};

exports.garden_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden update PUT ' + req.params.id);
};
