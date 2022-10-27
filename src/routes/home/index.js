'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get("/", ctrl.homeFn);
router.get("/login", ctrl.loginFn);

module.exports = router;