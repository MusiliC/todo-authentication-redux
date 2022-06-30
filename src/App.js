import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navigation from "./components/navigation/Navigation";
import Todos from "./components/todos/Todos";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { loadUser } from "./redux/actions/authActions";

function App() {

  const dispatch = useDispatch()

  // useEffect(() =>{
  //   dispatch(loadUser())
  // }, [dispatch])


  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navigation />
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Todos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
