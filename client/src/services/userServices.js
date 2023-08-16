import axios from "axios"

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  withCredentials: true,
});


const userServices = {
  registerUser: async (user) => {
    const res = await api.post(`${REACT_APP_BASE_URL}/api/register`, user);
    return res.data;
  },
  loginUser: async (user) => {
    const res = await api.post(`${REACT_APP_BASE_URL}/api/login`, user);
    return res.data;
  },
  logoutUser : async () => {
    const res = await api.post(`${REACT_APP_BASE_URL}/api/logout`);
    return res.data;
  },
  getProfile : async () => {
    const res = await api.post(`${REACT_APP_BASE_URL}/api/profile`);
    return res.data;
  },
}

export default userServices;