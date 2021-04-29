import axios from 'axios';

export const createOrUpdateUser = async (authToken) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/users/create-or-update-user`,
    {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const currentUser = async (authToken) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/users/current-user`,
    {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const currentAdmin = async (authToken) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/users/current-admin`,
    {},
    {
      headers: { authToken },
    }
  );
};

export const makeAdmin = async (authToken, email) => {
  let res;
  try {
    res = await axios.put(
      `${process.env.REACT_APP_API_URL}/users/make-admin`,
      { email },
      { headers: { authToken } }
    );
  } catch (error) {
    const { response } = error;
    res = response.data.errors[0].message;
  }
  return res;
};
