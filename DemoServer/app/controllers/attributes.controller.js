const db = require("../models");
const Attributes = db.attributes;

// Create and Save a new Attributes
exports.create = (req, res) => {
    console.log(req.body.properties)
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Attributes
  const attributes = new Attributes({
    name: req.body.name,
    properties: req.body.properties
  });

  // Save Attributes in the database
  attributes
    .save(attributes)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Attributes."
      });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    console.table(req.body)
  
    const id = req.body.id;
  
    Attributes.findByIdAndUpdate(id, {'properties.value':req.body.value})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update`
          });
        } else res.send({ message: "value  updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating attribute with id=" + id
        });
      });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Attributes.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving attributes."
      });
    });
};





