
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


exports.garden_delete = async function(req, res) {
  try {
    // Delete the garden and return the document that was removed.
    const deletedGarden = await Garden.findByIdAndDelete(req.params.id);
    if (!deletedGarden) {
      return res.status(404).json({ error: 'Garden not found' });
    }
    return res.json(deletedGarden);
  } catch (err) {
    // Mongoose raises a CastError when the ID format is invalid.
    if (err.name === 'CastError' && err.path === '_id') {
      return res.status(400).json({ error: 'Invalid Garden ID' });
    }
    return res.status(500).json({ error: 'Unable to delete garden' });
  }
};



exports.garden_update_put = async function(req, res) {
  try {
    let toUpdate = await Garden.findById(req.params.id);

    if (!toUpdate) {
      return res.status(404).json({ error: "Garden not found" });
    }

    if (req.body.name)
      toUpdate.name = req.body.name;

    if (req.body.location)
      toUpdate.location = req.body.location;

    if (req.body.areaAcres !== undefined)
      toUpdate.areaAcres = req.body.areaAcres;

    if (req.body.yearOpened !== undefined)
      toUpdate.yearOpened = req.body.yearOpened;

    let result = await toUpdate.save();
    res.send(result);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
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



