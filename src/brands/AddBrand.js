import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../utilities/Constants';

export default function AddBrand() {
  //loading
  const apiGetBrandByIdEndPoint = Constants.API_URL_GET_BRAND_BY_ID;
  
  let navigate = useNavigate();
  const [brand, setBrand] = useState({
    name: "",
     });
  const {name} = brand
  const onInputChange =(e)=>{
    setBrand({...brand,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
e.preventDefault();
await axios.post(apiGetBrandByIdEndPoint, brand);
navigate("/")

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Brand</h2>
<form onSubmit={(e)=>onSubmit(e)}>
          <div className="md-3">
            <label htmlFor="FirstName" className="form-label">
              Brand name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
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
