"use strict";

var router = require('express').Router();

var team = require('../controllers/team');

router.get('/', team.index);
router.get('/:id', team.show);
router.post('/', team.create);
router.put('/:id', team.update);
module.exports = router;