import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function Home() {
  const apiGetUsersEndPoint = Constants.API_URL_GET_ALL_USERS;
  const apiGetUserByIdEndPoint = Constants.API_URL_GET_USER_BY_ID;

  const apiGetDriversEndPoint = Constants.API_URL_GET_ALL_DRIVERS;
  const apiGetDriverByIdEndPoint = Constants.API_URL_GET_DRIVER_BY_ID;


  const [users, setUsers] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    loadUsers();
    loadDrivers();
    loadBrands();
    loadModels();
    loadVehicles();
    loadOrders();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(apiGetUsersEndPoint);
    setUsers(result.data);
  };
  const [drivers, setDrivers] = useState([]);
  const loadDrivers = async () => {
    const result = await axios.get(apiGetDriversEndPoint);
    setDrivers(result.data);
  };

  const [brands, setBrands] = useState([]);
  const loadBrands = async () => {
    const result = await axios.get("http://localhost:8080/brands");
    setBrands(result.data);
  };

  const [models, setModels] = useState([]);
  const loadModels = async () => {
    const result = await axios.get("http://localhost:8080/models");
    setModels(result.data);
  };


  const [vehicles, setVehicles] = useState([]);
  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:8080/vehicles");
    setVehicles(result.data);
  };

  const [orders, setOrders] = useState([]);
  const loadOrders = async () => {
    const result = await axios.get("http://localhost:8080/orders");
    setOrders(result.data);
  };



  const deleteDriver = async (id) => {
    await axios.delete(apiGetDriverByIdEndPoint+`/${id}`);
    loadDrivers();
  }
  const deleteUser = async (id) => {
    await axios.delete(apiGetUserByIdEndPoint+`/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h2>Users</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/view-user/${user.id}`}  className="btn btn-primary mx-2"> View User</Link>
                  <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">
                
                Edit
              </Link>
                  <button
                  onClick={() =>deleteUser(user.id)}
                   className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <h2>Drivers</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Age</th>
              <th scope="col">Salary $</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={driver.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{driver.firstName}</td>
                <td>{driver.lastName}</td>
                <td>{driver.email}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.age}</td>
                <td>{driver.salary}</td>
                <td>
                <Link to={`/view-driver/${driver.id}`}  className="btn btn-primary mx-2"> View Driver</Link>

                  <Link to={`/edit-driver/${driver.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteDriver(driver.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Brands</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>              
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={brand.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{brand.name}</td>
                
                <td>
                <Link to={`/view-driver/${brand.id}`}  className="btn btn-primary mx-2"> View Driver</Link>

                  <Link to={`/edit-driver/${brand.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteDriver(brand.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Models</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Model Name</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Actions</th>
             
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => (
              <tr key={model.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{model.name}</td>
                <td>{model.brand.name}</td>              
                         <td>
                <Link to={`/view-driver/${model.id}`}  className="btn btn-primary mx-2"> View Driver</Link>

                  <Link to={`/edit-driver/${model.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteDriver(model.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <h2>Vehicles</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Registration</th>
              <th scope="col">Seats</th>
              <th scope="col">Vehicle Weight</th>
              <th scope="col">Engine Power</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{vehicle.registration}</td>
                <td>{vehicle.seats}</td>
                <td>{vehicle.vehicleWeight}</td>
                <td>{vehicle.enginPower}</td>
                <td>{vehicle.model.name}</td>
                <td>{vehicle.model.brand.name}</td>
                <td>
                <Link to={`/view-driver/${vehicle.id}`}  className="btn btn-primary mx-2"> View Driver</Link>

                  <Link to={`/edit-driver/${vehicle.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteDriver(vehicle.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Orders</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Start Location</th>
              <th scope="col">End Location</th>
              <th scope="col">Customer</th>
              <th scope="col">Price</th>
              <th scope="col">Costs</th>
              <th scope="col">Vehicle Model</th>
              <th scope="col">Vehicle Brand</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{order.startLocation}</td>
                <td>{order.endLocation}</td>
                <td>{order.customer}</td>
                <td>{order.price}</td>
                <td>{order.cost}</td>
                <td>{order.vehicle.model.name}</td>
                <td>{order.vehicle.model.brand.name}</td>
                 
                <td>
                <Link to={`/view-driver/${order.id}`}  className="btn btn-primary mx-2"> View Driver</Link>

                  <Link to={`/edit-driver/${order.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteDriver(order.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
}
