import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../utilities/Constants';

export default function AddModel() {
const apiGetModelByIdEndPoint = Constants.API_URL_GET_MODEL_BY_ID;

  let navigate = useNavigate();
  const [model, setModel] = useState({
    id:"",
    name: "",   
     });
  const {name, id} = model
  const onInputChange =(e)=>{
    setModel({...model,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/brands/0/model", model);
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
              Model name
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Enter model name"
              name="id"
              value={id}
             onChange={(e)=>onInputChange(e)}
            ></input>

            <input
              type={"text"}
              className="form-control"
              placeholder="Enter model name"
              name="name"
              value={name}
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
