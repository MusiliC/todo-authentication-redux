import { toast } from "react-toastify";
import * as api from "../../api/index";
import { actionTypes } from "./actionType";

export const getTodos = () => async (dispatch) => {
  try {
    const response = await api.getTodos();

    dispatch({
      type: actionTypes.FETCH_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (todo) => async (dispatch) => {
  try {
    const response = await api.createTodo(todo);

    dispatch({
      type: actionTypes.CREATE_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const updatedTask = (id, updatedTask) => async (dispatch) => {
  try {
    const response = await api.editTodo(id, updatedTask);

    dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  dispatch(getTodos);
};

export const checkTask = (id) => async (dispatch) => {
  try {
    const response = await api.checkTodo(id, {});

    dispatch({
      type: actionTypes.CHECK_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  dispatch(getTodos);
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);

    dispatch({
      type: actionTypes.DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  dispatch(getTodos);
};
