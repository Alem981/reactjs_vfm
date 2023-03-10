import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Vehicle Fleet Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         
        <Link to="/add-driver" className="btn btn-outline-light">Add Driver</Link>
        <Link to="/add-brand" className="btn btn-outline-light">Add Brand</Link>
        <Link to="/add-model" className="btn btn-outline-light">Add Model</Link>
        <Link to="/add-vehicle" className="btn btn-outline-light">Add Vehicle</Link>
        <Link to="/add-order" className="btn btn-outline-light">Add Order</Link>
     
        </div>
      </nav>
    </div>
  );
}
