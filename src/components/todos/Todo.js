import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { checkTask, deleteTask } from "../../redux/actions/todoActions";

export default function Todo({ todo, setTodo }) {

const dispatch = useDispatch()

  const handleUpdate = () => {
    setTodo(todo);
    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    })
  };

  const handleCheck = (id) => {
    dispatch(checkTask(id))
  }

  const handleDelete = (id) => {
      dispatch(deleteTask(id))
  }

  return (
    <>
      <div className="container-lg mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card mt-3 ">
              <div className="card-body">
                <div className="card-text d-flex justify-content-between pe-3">
                  {todo.isComplete ? (
                    <h6 className="checked">{todo.name}</h6>
                  ) : (
                    <h6>{todo.name}</h6>
                  )}

                  <div>
                    {todo.isComplete ? (
                      <i
                        id="checked"
                        className="bi bi-check-square-fill px-2"
                        onClick={() => handleCheck(todo._id)}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-check-square px-2"
                        onClick={() => handleCheck(todo._id)}
                      ></i>
                    )}

                    <i
                      className="bi bi-pen-fill px-2"
                      onClick={() => handleUpdate()}
                    ></i>
                    <i className="bi bi-trash-fill px-2" onClick={() => handleDelete(todo._id)}></i>
                  </div>
                </div>
                <div className="card-text">Author:</div>
                <div className="card-text">
                  Added: {moment(todo.date).fromNow()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
