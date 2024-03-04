import axios from 'axios'
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.apiUrl;

const get_profile = async (user_id, token) => {
  console.log(user_id, token)
  const url = `${apiUrl}/api/user/${user_id}`
  const config = { headers: { Authorization: token } }

  const res = await axios.get(url, config);

  return res.data;
}

export { get_profile }