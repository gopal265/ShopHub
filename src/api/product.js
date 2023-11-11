import axios from "axios";
const  url = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(url);
export const getProduct = (id) => axios.get(`${url}/${id}`)