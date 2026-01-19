import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) =>
  axios.get(`${API_URL}/${id}`);
