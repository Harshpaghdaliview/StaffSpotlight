import React, { useState, useEffect } from "react";
import "../Signup/SignUp.css";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Errors, setErrors] = useState("");
  const [exist, setExist] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required*"),
    email: Yup.string()
      .email("Invalid email address*")
      .required("Email is required*"),
    password: Yup.string()
      .required("Password is required* ")
      .min(8, "Password is too short"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match*")
      .required("Confirm Password is required*"),
  });

  // useEffect(() => {
  //   user.find((item) => {
  //     if (item.email === email) {
  //       setExist(true);
  //     }
  //   });

  //   schema
  //     .validate(
  //       {
  //         name: username,
  //         email: email,
  //         password: password,
  //         confirmPassword: confirmPassword,
  //       },
  //       { abortEarly: false }
  //     )
  //     .catch((err) => {
  //       const errors = {};
  //       err.inner.forEach((e) => {
  //         errors[e.path] = e.message;
  //       });
  //       setErrors(errors);
  //     });
  // }, [email, username, password, confirmPassword]);

  const history = useNavigate();
  const existinguser = async () => {
    const exuser = await axios.get("http://localhost:3006/user");
    setUser(exuser.data);
  };
  useEffect(() => {
    existinguser();
  }, []);

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    schema
      .validate(
        {
          name: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        { abortEarly: false }
      )
      .then(() => {
        axios.post("http://localhost:3006/user", {
          name: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        });
        history("/login");
        toast.success("Signup Successful", { style: { fontSize: "14px" } });
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
    <div className="Smain-div">
      <div className="signup-container">
        <br />
        <h1 className="headingtext mb-5">Signup </h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signup-form">
            <fieldset>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {Errors.name && <div style={{ color: "red" }}>{Errors.name}</div>}
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email: </label>
              <input
                placeholder="Enter your email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {Errors.email && (
                <div style={{ color: "red" }}>{Errors.email}</div>
              )}
              {exist && (
                <div style={{ color: "red" }}>User already exist!!!</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="Enter a Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {Errors.password && (
                <div style={{ color: "red" }}>{Errors.password}</div>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Confirm Password: </label>
              <input
                type="password"
                id="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter Password again"
              />
              {Errors.confirmPassword && (
                <div style={{ color: "red" }}>{Errors.confirmPassword}</div>
              )}
            </fieldset>
            <br />
          </div>
          <div className="loginbutton">
            <button type="submit">Signup</button>
          </div>
        </form>
        <br />
        <p>
          {" "}
          Already have an account?{" "}
          <span>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
              to={"/Login"}
            >
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
