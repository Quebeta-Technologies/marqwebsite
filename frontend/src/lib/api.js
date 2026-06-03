import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const submitEnquiry = async (payload) => {
  const res = await axios.post(`${API}/enquiries`, payload);
  return res.data;
};
