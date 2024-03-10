"use strict";

const library = require("../controller/library.controller");

const router = require("express").Router();

router.route("/books").get(library.list).post(library.create);

router
  .route("/books/:id")
  .get(library.read)
  .put(library.update)
  .patch(library.update)
  .delete(library.delete);

module.exports = router;
