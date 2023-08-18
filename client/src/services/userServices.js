import axios from "axios"

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  withCredentials: true,
});


const userServices = {
  registerUser: async (user) => {
    try {
      const res = await api.post(`${REACT_APP_BASE_URL}/api/register`, user);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
  loginUser: async (user) => {
    try {
      const res = await api.post(`${REACT_APP_BASE_URL}/api/login`, user);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
  logoutUser: async () => {
    try{
      const res = await api.post(`${REACT_APP_BASE_URL}/api/logout`);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
  getProfile: async () => {
    try{
      const res = await api.post(`${REACT_APP_BASE_URL}/api/profile`);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
}

export default userServices;