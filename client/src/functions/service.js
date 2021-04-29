import axios from 'axios';

export const createService = async (authToken, service) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/services`,
    { service },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getServices = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/services`);
};

export const deleteServiceById = async (authToken, id) => {
  return axios.delete(
    `${process.env.REACT_APP_API_URL}/services/${id}`,
    // {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getServiceById = async (authToken, id) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/services/${id}`,
    // {},
    {
      headers: {
        authToken,
      },
    }
  );
};
