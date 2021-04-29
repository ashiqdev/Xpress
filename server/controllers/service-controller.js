const express = require('express');

const { catchErrors } = require('../helpers/error-catcher');

const { authCheck, adminCheck } = require('../middlewares/auth');
const {
  getAllServices,
  getServicesById,
  createService,
  deleteService,
} = require('../services/service-services');

const router = express.Router();

const getHandler = async (req, res) => {
  const services = await getAllServices();
  res.status(200).json(services);
};

const getByIdHandler = async (req, res) => {
  const { id } = req.params;
  const service = await getServicesById(id);

  res.status(200).json(service);
};

const postHandlder = async (req, res) => {
  const service = await createService(req.body.service, req.user.email);

  res.status(201).json(service);
};

const deleteHandler = async (req, res) => {
  const { id } = req.params;
  const service = await deleteService(id);

  res.status(200).json(service);
};

router.get('/', catchErrors(getHandler));

router.get('/:id', authCheck, catchErrors(getByIdHandler));

router.post('/', authCheck, adminCheck, catchErrors(postHandlder));

router.delete('/:id', authCheck, adminCheck, catchErrors(deleteHandler));

module.exports = router;
