import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function ViewBrand() {
  const apiGetBrandByIdEndPoint = Constants.API_URL_GET_BRAND_BY_ID;

  const [brand, setBrand] = useState({
    name: "",   
  });
  const { id } = useParams();
  useEffect(() => {
    loadBrand();
  }, []);
  const loadBrand = async () => {
    const result = await axios.get(apiGetBrandByIdEndPoint+`/${id}`);
    setBrand(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Brand Details</h2>
          <div className="card">
            <div className="card-header">
              Details of brand id :{brand.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Brand Name: </b>
                  {brand.name}
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
