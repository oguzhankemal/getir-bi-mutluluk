var express = require('express');
var validator = require('../validator/index');
var router = express.Router();
var recordController = require('../controllers/recordController');

// POST request for the get filtered record list
router.post('/getRecords',validator.validateGetRecords(), recordController.recordList);

module.exports = router;