import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function ViewOrder() {
  const apiGetOrderByIdEndPoint = Constants.API_URL_GET_ORDER_BY_ID;

  const [order, setOrder] = useState({
    id: "",
    startLocation: "",
    endLocation: "",
    customer: "",
    cost: "",
    price: "",
    vehicle: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadOrder();
  }, []);
  const loadOrder = async () => {
    const result = await axios.get(apiGetOrderByIdEndPoint + `/${id}`);
    setOrder(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id :{order.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Start Location: </b>
                  {order.startLocation}
                </li>
                <li className="list-group-item">
                  <b>End Location: </b>
                  {order.endLocation}
                </li>
                <li className="list-group-item">
                  <b>Customer Name:</b> {order.customer}
                </li>

                <li className="list-group-item">
                  <b>Price:</b> {order.price}
                </li>

                <li className="list-group-item">
                  <b>Cost:</b> {order.cost}
                </li>
                <li className="list-group-item">
                  <b>Vehicle Id:</b> {order.vehicle.id}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={`/`}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
