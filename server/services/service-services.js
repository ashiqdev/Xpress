const models = require('../models');

const { NotFound } = require('../utils/errors');

const { Service } = models;

const createService = async (service, email) => {
  const newService = await new Service({
    ...service,
    email,
  }).save();

  return newService;
};

const getAllServices = async () => {
  const services = await Service.find({});

  return services;
};

const getServicesById = async (id) => {
  const service = await Service.findOne({ _id: id });

  return service;
};

const deleteService = async (id) => {
  const service = await Service.findOneAndRemove({ _id: id });

  if (!service) throw new NotFound('service not found by given id');

  return service;
};

module.exports = {
  createService,
  getAllServices,
  getServicesById,
  deleteService,
};
