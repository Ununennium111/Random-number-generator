const express = require('express');
const router = express.Router();

const { returnGenerator } = require('./../controllers/generator');

router.get('/', returnGenerator);

module.exports = router;