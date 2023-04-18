import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
  const history = useNavigate();
  const isLoggedIn = !!localStorage.getItem("email");
  const handleLogout = async() => {
    localStorage.clear();
    toast("Logout successfully!", {style: {fontSize:"14px"}});
    history("/");
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="nav-heading"> Staff Spotlight</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 me-n3">
            <NavLink to="/" className="nav-item nav-link active">
            <b> Home </b>
            </NavLink>

            {isLoggedIn ? (
              <>
                {" "}
                <NavLink to="/Products" className="nav-item nav-link">
                  <b> Products</b>
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  onClick={handleLogout}
                  to="/"
                >
                  <b> Logout</b>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-item nav-link">
                  <b> Login </b>
                </NavLink>
                <NavLink to="/SignUp" className="nav-item nav-link">
                  <b> SignUp </b>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
