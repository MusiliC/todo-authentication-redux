import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/actions/todoActions";
import Todo from "./Todo";

export default function TodoList({ setTodo }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {todos.length > 0 ? (
        <h4 className="text-center mb-2">My Todos...</h4>
      ) : (
        <h4 className="text-center mb-2">No Todos yet...</h4>
      )}

      {todos.map((todo) => {
        return <Todo todo={todo} key={todo._id} setTodo={setTodo} />;
      })}
    </>
  );
}
