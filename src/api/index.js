import axios from "axios";
import { setHeaders } from "./auth";

export const url = "http://localhost:5000/api";

export const createTodo = (todo) => axios.post(`${url}/todos`, todo, setHeaders());

export const getTodos = () => axios.get(`${url}/todos`, setHeaders());

export const editTodo = (id, updatedTodo) =>
  axios.put(`${url}/todos/${id}`, updatedTodo, setHeaders());

export const checkTodo = (id) => axios.patch(`${url}/todos/${id}`, {}, setHeaders());

export const deleteTodo = (id) => axios.delete(`${url}/todos/${id}`, setHeaders());
