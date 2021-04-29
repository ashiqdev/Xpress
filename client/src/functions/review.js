import axios from 'axios';

export const createReview = async (authToken, review) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/reviews`,
    { review },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getReviews = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
};
