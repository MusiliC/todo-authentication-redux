import React from "react";
import { useDispatch } from "react-redux";
import { addTask, updatedTask } from "../../redux/actions/todoActions";

export default function AddTodo({todo, setTodo}) {

 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    if(todo._id ){

      const id = todo._id
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: "Cee"
      }
      dispatch(updatedTask(id, updatedTodo))
     
    }else{
      
    dispatch(addTask(todo));
    console.log("Todo added successfully");
    }

    setTodo({
      name: "",
      isComplete: false,
    });

  };

  return (
    <>
      <section>
        <div className="container-lg">
          <div className="row justify-content-center p-3">
            <div className="col-lg-5">
              <form action="">
                <label htmlFor="text" className="form-label">
                  Add todo..
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={todo.name}
                    onChange={(e) =>
                      setTodo({
                        ...todo,
                        name: e.target.value,
                        date: new Date(),
                      })
                    }
                  />
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    { todo._id ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
