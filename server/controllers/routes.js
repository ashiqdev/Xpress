const express = require('express');

const userRoutes = require('./user-controller');

const serviceRoutes = require('./service-controller');

const reviewRoutes = require('./review-controller');

const orderRoutes = require('./order-controller');

const router = express.Router();

router.use('/users', userRoutes);

router.use('/services', serviceRoutes);

router.use('/reviews', reviewRoutes);

router.use('/orders', orderRoutes);

module.exports = router;
