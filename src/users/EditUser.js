import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function AddUser() {
  const apiGetUserByIdEndPoint = Constants.API_URL_GET_USER_BY_ID;

    let navigate = useNavigate();
    const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user
  const onInputChange =(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async(e)=>{
e.preventDefault();
await axios.put(apiGetUserByIdEndPoint+`/${id}`, user);
navigate("/");
  };
  const loadUser=async()=>{
    const result =await axios.get(apiGetUserByIdEndPoint+`/${id}`);
    setUser(result.data);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
<form onSubmit={(e)=>onSubmit(e)}>
          <div className="md-3">
            <label htmlFor="Name" className="form-label">
              Name
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

          <div className="md-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
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
