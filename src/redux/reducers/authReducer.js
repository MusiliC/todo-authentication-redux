import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { actionTypes } from "../actions/actionType";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
    case actionTypes.SIGN_IN:
    case actionTypes.SIGN_UP:
      toast("welcome..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      const user = jwtDecode(action.payload);
      return {
        ...initialState,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id,
      };

    case actionTypes.SIGN_OUT:
      localStorage.removeItem("token");
      toast("Logging out..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };

    default:
      return state;
  }
};

export default authReducer;
