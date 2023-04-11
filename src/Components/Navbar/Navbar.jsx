import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
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
              Home
            </NavLink>
            <NavLink to="/Products" className="nav-item nav-link">
             Products
            </NavLink>
             
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
