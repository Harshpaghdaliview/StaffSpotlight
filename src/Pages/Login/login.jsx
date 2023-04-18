import React, { useState, useEffect } from "react";
import "../Login/login.css";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [result, setresult] = useState();
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const getdata = async () => {
    const result = await axios.get("http://localhost:3006/user");
    setresult(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate({ email: email, password: password }, { abortEarly: false })
      .then(() => {
        const found = result.find((obj) => {
          if (obj.email == email && obj.password == password) {
            localStorage.setItem("email", obj.email);
            history("/products");
            console.log("first");
            toast.success(
              "login successfull",
              {
                toastId: "success1",
              },
              { style: { fontSize: "14px" } }
            );
          } else {
            setErrors({
              email: "Invalid email or password",
              password: "Invalid email or password",
            });
          }
        });
      })

      .catch((err) => {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  };

  return (
    <>
      <div className="main-div">
        <div className="login-container">
          <h1 className="headingtext">Login</h1>
          <hr />
          <form className="form" onSubmit={handleSubmit}>
            <div className="login-form">
              <fieldset>
                <label htmlFor="Email" className="inputfield">
                  Email:
                </label>
                <input
                  type="text"
                  id="Email"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </fieldset>
              <fieldset>
                <label htmlFor="password" className="inputfield">
                  Password:
                </label>{" "}
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </fieldset>
            </div>
            <br />
            <div className="loginbutton">
              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
