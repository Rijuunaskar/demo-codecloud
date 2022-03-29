module.exports = app => {
  const attributes = require("../controllers/attributes.controller.js");

  var router = require("express").Router();

  router.post("/", attributes.create);

  router.get("/", attributes.findAll);

  router.post("/update", attributes.update);

  app.use("/api/attributes", router);
};
