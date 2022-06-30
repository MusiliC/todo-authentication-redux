import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUser } from "../../redux/actions/authActions";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setUser((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUser(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });

    if (auth._id) return
    navigate("/")
  };

  return (
    <>
      <div>
        <div className="container-lg">
          <div className="text-center mt-2 lead">Create Account</div>
          <div className="row justify-content-center my-2 p-3">
            <div className="col-lg-4 border border-dark rounded p-4">
              <form action="">
                <label htmlFor="email" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={user.name}
                  onChange={handleInputChange}
                />

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
              <div className="text-center  my-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
