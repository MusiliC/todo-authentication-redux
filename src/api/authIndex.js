import axios from "axios";
export const url = "http://localhost:5000/api";

export const createUser = (user) => axios.post(`${url}/signup`, user);

export const signinUser = (user) => axios.post(`${url}/signin`, user);
