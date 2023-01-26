import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function ViewDriver() {
  const apiGetDriverByIdEndPoint = Constants.API_URL_GET_DRIVER_BY_ID;

  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    Age: "",
    Salary: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadDriver();
  }, []);
  const loadDriver = async () => {
    const result = await axios.get(apiGetDriverByIdEndPoint+`/${id}`);
    setDriver(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id :{driver.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name: </b>
                  {driver.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name: </b>{driver.lastName}
                </li>
                <li className="list-group-item">
                  <b>E-mail:</b> {driver.email}
                  </li>

                  <li className="list-group-item">
                  <b>Phone Number:</b> {driver.phoneNumber}
                  </li>

                  <li className="list-group-item">
                  <b>Age:</b> {driver.age}
                  </li>
                  <li className="list-group-item">
                  <b>Salary $:</b> {driver.salary}
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
