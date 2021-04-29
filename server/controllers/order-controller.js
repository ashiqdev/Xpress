const express = require('express');

const { catchErrors } = require('../helpers/error-catcher');

const { authCheck, adminCheck } = require('../middlewares/auth');

const {
  createOrder,
  updateOrder,
  getOrders,
} = require('../services/order-services');

const router = express.Router();

const postHandler = async (req, res) => {
  const order = await createOrder(req.body.order, req.user.email);

  res.status(201).json(order);
};

const putHandler = async (req, res) => {
  const { id } = req.params;
  const order = await updateOrder(id, req.body, req.user.email);

  res.status(200).json(order);
};

const getHandler = async (req, res) => {
  const orders = await getOrders(req.user);
  res.status(200).json(orders);
};

router.post('/', authCheck, catchErrors(postHandler));

router.put('/:id', authCheck, adminCheck, catchErrors(putHandler));

router.get('/', authCheck, catchErrors(getHandler));

module.exports = router;
