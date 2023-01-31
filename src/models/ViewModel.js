import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function ViewModel() {
  const apiGetModelByIdEndPoint = Constants.API_URL_GET_MODEL_BY_ID;

  const [model, setModel] = useState({
    name: "",   
  });
  const { id } = useParams();
  useEffect(() => {
    loadModel();
  }, []);
  const loadModel = async () => {
    const result = await axios.get(apiGetModelByIdEndPoint+`/${id}`);
    setModel(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Model Details</h2>
          <div className="card">
            <div className="card-header">
              Details of Model id :{model.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Model Name: </b>
                  {model.name}
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
