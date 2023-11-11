import axios from "axios";

const base_url  = "https://fakestoreapi.com/users";
const base_url2 = "https://fakestoreapi.com/auth/login"
export const singup = (data) => axios.post(base_url,data);
export const login  = (data) => axios.post(base_url2,data);