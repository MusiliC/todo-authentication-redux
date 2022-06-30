import { toast } from "react-toastify";
import { actionTypes } from "../actions/actionType";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return action.payload;

    case actionTypes.CREATE_TODO:
      toast.success("A todo was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return [action.payload, ...state];

    case actionTypes.UPDATE_TODO:
      toast.success("A todo was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    case actionTypes.CHECK_TODO:
      toast.success("Todo status changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    case actionTypes.DELETE_TODO:
      toast.success("Todo deleted ...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) =>
        todo._id !== action.payload
      );

    default:
      return state;
  }
};

export default todoReducer;
