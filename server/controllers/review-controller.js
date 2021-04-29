const express = require('express');

const { catchErrors } = require('../helpers/error-catcher');

const { authCheck } = require('../middlewares/auth');

const {
  getAllReviews,
  getReviewById,
  createReview,
} = require('../services/review-services');

const router = express.Router();

const getHandler = async (req, res) => {
  const reviews = await getAllReviews();
  res.status(200).json(reviews);
};

const getByIdHandler = async (req, res) => {
  const { id } = req.params;
  const review = await getReviewById(id);
  res.status(200).json(review);
};

const postHandler = async (req, res) => {
  const review = await createReview(req.body.review, req.user.email);
  res.status(201).json(review);
};

router.get('/', catchErrors(getHandler));

router.get('/:id', catchErrors(getByIdHandler));

router.post('/', authCheck, catchErrors(postHandler));

module.exports = router;
