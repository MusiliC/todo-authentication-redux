import { toast } from "react-toastify";
import * as api from "../../api/authIndex";
import { actionTypes } from "./actionType";



export const signUser = (user) => async (dispatch) => {
  try {
    const response = await api.createUser(user);
    localStorage.setItem("token", response.data)

    dispatch({
      type: actionTypes.SIGN_UP, 
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } 
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const response = await api.signinUser(user);
    localStorage.setItem("token", response.data);

    dispatch({
      type: actionTypes.SIGN_IN,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if (!token){
            dispatch({
                type: actionTypes.LOAD_USER,
                payload: token
            })
        } else return null;
    }
}

export const signOut = () => {
    return(dispatch) => {
        dispatch({
            type: actionTypes.SIGN_OUT
        })
    }
}