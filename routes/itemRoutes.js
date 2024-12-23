const express = require('express');
const { getItems } = require('../controllers/itemController');
const router = express.Router();

// GET API for Pagination, Searching, and Sorting
router.get('/items', getItems);

module.exports = router;
