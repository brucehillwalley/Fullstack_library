"use strict";

const library = require('../controller/library.controller')

const router = require('express').Router()

router.route('/')
    .get(library.list)
    .post(library.create)

router.route('/:id')
    .get(library.read)
    .put(library.update)
    .patch(library.update)
    .delete(library.delete)

module.exports = router