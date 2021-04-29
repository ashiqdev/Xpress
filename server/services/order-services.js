const models = require('../models');

const { Order, User } = models;

const createOrder = async (order, email) => {
  const newOrder = await new Order({
    ...order,
    email,
  }).save();
};

const updateOrder = async (id, order, email) => {
  // console.log({ status: order });
  const updatedOrder = await Order.findOneAndUpdate(
    { _id: id },
    { status: order.order.status },
    {
      new: true,
    }
  );

  if (!updatedOrder) throw new NotFound('order not found by given id');
  // console.log(updatedOrder);
  return updatedOrder;
};

const getOrders = async (user) => {
  // find the user
  const myUser = await User.findOne({ email: user.email });
  // if user is admin, return all orders

  if (myUser.role === 'admin') {
    const allOrders = await Order.find({}).populate('service', [
      'title',
      'description',
      'price',
    ]);
    return allOrders;
  } else {
    //else  return the orders of the logged in user
    const orders = await Order.find({ email: user.email }).populate('service', [
      'title',
      'description',
      'price',
    ]);

    return orders;
  }
};

module.exports = { createOrder, updateOrder, getOrders };
