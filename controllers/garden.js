
var Garden = require('../models/garden');


exports.garden_list = async function(req, res) {
  try {
    const gardens = await Garden.find();
    res.send(gardens);
  }
  catch (err) {
    res.status(500);
    res.send({ error: err.message });
  }
};


exports.garden_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden detail: ' + req.params.id);
};


exports.garden_create_post = async function(req, res) {
  console.log(req.body);

  let garden = new Garden();

  garden.name = req.body.name;
  garden.location = req.body.location;
  garden.areaAcres = req.body.areaAcres;
  garden.yearOpened = req.body.yearOpened;

  try {
    let result = await garden.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send({ error: err.message });
  }
};


exports.garden_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden delete DELETE ' + req.params.id);
};

exports.garden_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Garden update PUT ' + req.params.id);
};



exports.garden_view_all_Page = async function(req, res) {
  try {
    const gardens = await Garden.find();
    res.render('gardens', {
      title: 'Garden Search Results',
      results: gardens
    });
  }
  catch (err) {
    res.status(500);
    res.send({ error: err.message });
  }
};


exports.garden_detail = async function(req, res) {
  try {
    let result = await Garden.findById(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Garden not found" });
    }

    res.send(result);
  } catch (err) {
    res.status(500).json({ error: "Unable to find garden" });
  }
};



