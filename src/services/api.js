import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

export const getStates = async () => {
  const response = await axios.get(`${BASE_URL}/states`);
  return response.data;
};

export const getCities = async (state) => {
  const response = await axios.get(`${BASE_URL}/cities/${state}`);
  return response.data;
};

export const getMedicalCenters = async (state, city) => {
  const response = await axios.get(`${BASE_URL}/data?state=${state}&city=${city}`);
  return response.data;
};
