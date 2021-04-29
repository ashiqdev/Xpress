const express = require('express');
const { catchErrors } = require('../helpers/error-catcher');
const { authCheck, adminCheck } = require('../middlewares/auth');

const models = require('../models');

const { User } = models;

const {
  createOrUpdateUser,
  currentUser,
  updateRole,
} = require('../services/user-services');

const router = express.Router();

const loginHandler = async (req, res) => {
  const user = await createOrUpdateUser(req.user);
  res.status(200).json(user);
};

const getUserHandler = async (req, res) => {
  const user = await currentUser(req.user);
  console.log({ james: user });
  res.status(200).json(user);
};

const adminHandler = async (req, res) => {
  const updatedUser = await updateRole(req.body.email);
  return res.status(200).json(updatedUser)
};

router.post('/create-or-update-user', authCheck, catchErrors(loginHandler));

router.post('/current-user', authCheck, catchErrors(getUserHandler));

// temp
// router.post('/create-admin', async (req, res) => {
//   const newAdmin = await new User({
//     email: req.body.email,
//     name: req.body.name,
//     role: 'admin',
//   }).save();

//   res.status(201).json(newAdmin);
// });

router.put('/make-admin', authCheck, adminCheck, catchErrors(adminHandler));

router.post(
  '/current-admin',
  authCheck,
  adminCheck,
  catchErrors(getUserHandler)
);

module.exports = router;
