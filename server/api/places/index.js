'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./places.controller');
router.get("/", controller.get)
router.post("/", controller.create)

module.exports = router;