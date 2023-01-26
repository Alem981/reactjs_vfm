import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../utilities/Constants';

export default function AddDriver() {
const apiGetDriverByIdEndPoint = Constants.API_URL_GET_DRIVER_BY_ID;

  let navigate = useNavigate();
  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    Age: "",
    Salary: "",
  });
  const { firstName, lastName, email, phoneNumber, age, salary } = driver
  const onInputChange =(e)=>{
    setDriver({...driver,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
e.preventDefault();
await axios.post(apiGetDriverByIdEndPoint, driver);
navigate("/")

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Driver</h2>
<form onSubmit={(e)=>onSubmit(e)}>
          <div className="md-3">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="firstName"
              value={firstName}
             onChange={(e)=>onInputChange(e)}
            ></input>
          </div>

          <div className="md-3">
            <label htmlFor="Last Name" className="form-label">
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="lastName"
              value={lastName}
              onChange={(e)=>onInputChange(e)}

            ></input>
          </div>

          <div className="md-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}

            ></input>
          </div>

          <div className="md-3">
            <label htmlFor="Phone Number" className="form-label">
            Phone Number
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>

          <div className="md-3">
            <label htmlFor="Age" className="form-label">
            Age
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Enter your age"
              name="age"
              value={age}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
          
          <div className="md-3">
            <label htmlFor="Phone Number" className="form-label">
          Salary
            </label>
            <input
             type={"number"}
              className="form-control"
              placeholder="Enter driver salary"
              name="salary"
              value={salary}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>

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
