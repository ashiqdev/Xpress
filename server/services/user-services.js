const models = require('../models');
const { NotFound } = require('../utils/errors');

const { User } = models;

const createOrUpdateUser = async ({ name, email }) => {
  const user = await User.findOneAndUpdate({ email }, { name }, { new: true });

  if (user) {
    return user;
  } else {
    const newUser = await new User({
      email,
      name,
    }).save();

    return newUser;
  }
};

const currentUser = async (user) => {
  console.log({ jona: user });
  // await User.findOne({ email: user.email }).exec((err, user) => {
  //   if (err) throw new Error(err);
  //   return user;
  // });
  const currentUser = await User.findOne({ email: user.email });

  return currentUser;
};

const updateRole = async (email) => {
  const updatedUser = await User.findOneAndUpdate(
    { email: email },
    { role: 'admin' },
    { new: true }
  );

  if (!updatedUser) throw new NotFound('user not found by given email');

  return updatedUser;
};

module.exports = { createOrUpdateUser, currentUser, updateRole };
