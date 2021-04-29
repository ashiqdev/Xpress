import axios from 'axios';

export const createOrder = async (authToken, order) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/orders`,
    { order },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const updateOrder = async (authToken, order, id) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/orders/${id}`,
    { order },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getOrders = async (authToken) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/orders`, {
    headers: {
      authToken,
    },
  });
};
