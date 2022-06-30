import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../redux/actions/authActions";

export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(loginUser(user));
    if (auth._id) {
      navigate("/");
    }
   
  };

  return (
    <>
      <div>
        <div className="container-lg ">
          <div className="text-center mt-4 display-6">Sign in</div>
          <div className="row justify-content-center p-3">
            <div className="col-lg-4 border border-dark rounded p-3 ">
              <form action="">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </form>
              <div className="mt-2">
                <strong>
                  <Link to="/signup">Create Account?</Link>
                </strong>
              </div>
              <div className="text-center  my-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
