import React, {useState} from 'react'
import AddTodo from './AddTodo'
// import Todo from './Todo'
import TodoList from './TodoList';

export default function Todos() {

   const [todo, setTodo] = useState({
     name: "",
     isComplete: false,
   });

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      {/* <Todo  setTodo={setTodo} /> */}
      <TodoList setTodo={setTodo}/>
    </>
  );
}
