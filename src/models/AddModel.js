import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../utilities/Constants';

export default function AddModel() {
   //loading
  const [searchModel, setSearchModel] = useState("");
  const [brandId, setBrandId] = useState('');
  const apiGetBrandsEndPoint = Constants.API_URL_GET_ALL_BRANDS;

  useEffect(() => {   
    loadBrands();
  }, []);
  const [brands, setBrands] = useState([]);
  const loadBrands = async () => {
    const result = await axios.get(apiGetBrandsEndPoint);
    setBrands(result.data);
  };

//post
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
await axios.post(`http://localhost:8080/brands/${brandId}/model`, brand);
navigate("/")


  }
  const handleBrand =(event)=>{
    const getBrandId=event.target.value;    
    setBrandId(getBrandId);
   
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Model </h2>
<form onSubmit={(e)=>onSubmit(e)}>
          <div className="md-3">
            <label htmlFor="FirstName" className="form-label">
              Model name
            </label>

            <select
          name="Brands"
          className="form-control"
          /* handleBrand */ onChange={(e) => handleBrand(e)}
        >
          <option value="">--Select Brand--</option>
          {brands.map((getBrand) => (
            <option key={getBrand.id} value={getBrand.id}>
              {getBrand.name}
            </option>
          ))}
        </select>

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
