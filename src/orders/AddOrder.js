import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function AddOrder() {
  const apiGetOrderByIdEndPoint = Constants.API_URL_GET_Order_BY_ID;

  let navigate = useNavigate();
  const [order, setOrder] = useState({
    id: "",
    startLocation: "",
    endLocation: "",
    customer: "",
    price: "",
    cost: "",
  });
  const { id, startLocation, endLocation, customer, price, cost } = order;
  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/vehicle/1/order", order);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Model</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="md-3">
              <label htmlFor="FirstName" className="form-label">
                Vehicle Id
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Order Id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              ></input>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Start Location "
                name="startLocation"
                value={startLocation}
                onChange={(e) => onInputChange(e)}
              ></input>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter End Location "
                name="endLocation"
                value={endLocation}
                onChange={(e) => onInputChange(e)}
              ></input>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Customer Name"
                name="customer"
                value={customer}
                onChange={(e) => onInputChange(e)}
              ></input>

              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              ></input>

              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Cost"
                name="cost"
                value={cost}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <br />
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
