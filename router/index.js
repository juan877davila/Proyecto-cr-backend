const express = require('express');
const router = express.Router();
const ArticuloRoutes = require('./ArticuloRoute');

router.use(ArticuloRoutes);

module.exports = router;