import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../utilities/Constants';

export default function AddVehicle() {
const apiGetVehicleByIdEndPoint = Constants.API_URL_GET_Vehicle_BY_ID;

  let navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    id:"",
    
    registration:"",
    seats:"",
    vehicleWeight:"",
    enginPower:""   
     });
  const {id, registration,seats,vehicleWeight,enginPower} = vehicle
  const onInputChange =(e)=>{
    setVehicle({...vehicle,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/models/1/vehicle", vehicle);
navigate("/")

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Model</h2>
<form onSubmit={(e)=>onSubmit(e)}>
          <div className="md-3">
            <label htmlFor="FirstName" className="form-label">
              Vehicle Id
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Enter Vehicle Id"
              name="id"
              value={id}
             onChange={(e)=>onInputChange(e)}
            ></input>

            <input
              type={"text"}
              className="form-control"
              placeholder="Enter registration "
              name="registration"
              value={registration}
             onChange={(e)=>onInputChange(e)}
            ></input>


<input
              type={"number"}
              className="form-control"
              placeholder="Enter seats number"
              name="seats"
              value={seats}
             onChange={(e)=>onInputChange(e)}
            ></input>
<input
              type={"number"}
              className="form-control"
              placeholder="Enter Vehicle Weight [Kg]"
              name="vehicleWeight"
              value={vehicleWeight}
             onChange={(e)=>onInputChange(e)}
            ></input>

<input
              type={"number"}
              className="form-control"
              placeholder="Enter Engine Power [KW]"
              name="enginPower"
              value={enginPower}
             onChange={(e)=>onInputChange(e)}
            ></input>

          </div>

<br/>
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
