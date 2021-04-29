const models = require('../models');

const { Review } = models;

const createReview = async (review, email) => {
  const newReview = await new Review({
    ...review,
    email,
  }).save();

  return newReview;
};

const getAllReviews = async () => {
  const reviews = await Review.find({});

  return reviews;
};

const getReviewById = async (id) => {
  const review = await Review.findOne({ _id: id });

  return review;
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
};
