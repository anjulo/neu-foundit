import axios from "axios"

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  withCredentials: true,
});


const lostItemsServices = {
  createLostItem: async (item) => {
    try {
      const res = await api.post(`${REACT_APP_BASE_URL}/api/lost`, item);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
  getLostItems: async () => {
    try {
      const res = await api.get(`${REACT_APP_BASE_URL}/api/lost`);
      return res.data;
    } catch (e) {
      throw e.data;
    }
  },
  // logoutUser: async () => {
  //   try{
  //     const res = await api.post(`${REACT_APP_BASE_URL}/api/logout`);
  //     return res.data;
  //   } catch (e) {
  //     throw e.data;
  //   }
  // },
}

export default lostItemsServices;