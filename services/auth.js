import axios from 'axios'
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.apiUrl;

const login = async (payload) => {
  const url = `${apiUrl}/api/auth/login`;
  const res = await axios.post(url, payload);

  return res.data;
};

const register = async (payload) => {
  const url = `${apiUrl}/api/auth/register`;
  console.log(url)

  const res = await axios.post(url, payload);

  return res.data;
};

export { login, register }