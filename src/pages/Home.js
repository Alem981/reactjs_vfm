import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Constants from "../utilities/Constants";

export default function Home() { 

  const apiGetDriversEndPoint = Constants.API_URL_GET_ALL_DRIVERS;
  const apiGetDriverByIdEndPoint = Constants.API_URL_GET_DRIVER_BY_ID;

  const apiGetBrandsEndPoint = Constants.API_URL_GET_ALL_BRANDS;
  const apiGetBrandByIdEndPoint = Constants.API_URL_GET_BRAND_BY_ID;

  const apiGetModelsEndPoint = Constants.API_URL_GET_ALL_MODELS;
  const apiGetModelByIdEndPoint = Constants.API_URL_GET_MODEL_BY_ID;

  const apiGetVehiclesEndPoint = Constants.API_URL_GET_ALL_VEHICLES;
  const apiGetVehicleByIdEndPoint = Constants.API_URL_GET_VEHICLE_BY_ID;

  const apiGetOrdersEndPoint = Constants.API_URL_GET_ALL_ORDERS;
  const apiGetOrderByIdEndPoint = Constants.API_URL_GET_ORDER_BY_ID;

   const {id} = useParams();
  useEffect(() => {   
    loadDrivers();
    loadBrands();
    loadModels();
    loadVehicles();
    loadOrders();
  }, []); 
  const [drivers, setDrivers] = useState([]);
  const loadDrivers = async () => {
    const result = await axios.get(apiGetDriversEndPoint);
    setDrivers(result.data);
  };

  const [brands, setBrands] = useState([]);
  const loadBrands = async () => {
    const result = await axios.get(apiGetBrandsEndPoint);
    setBrands(result.data);
  };

  const [models, setModels] = useState([]);
  const loadModels = async () => {
    const result = await axios.get(apiGetModelsEndPoint);
    setModels(result.data);
  };


  const [vehicles, setVehicles] = useState([]);
  const loadVehicles = async () => {
    const result = await axios.get(apiGetVehiclesEndPoint);
    setVehicles(result.data);
  };

  const [orders, setOrders] = useState([]);
  const loadOrders = async () => {
    const result = await axios.get(apiGetOrdersEndPoint);
    setOrders(result.data);
  };

  const deleteDriver = async (id) => {
    await axios.delete(apiGetDriverByIdEndPoint+`/${id}`);
    loadDrivers();
  }
  
    const deleteBrand = async (id) => {
    await axios.delete(apiGetBrandByIdEndPoint+`/${id}`);
    loadBrands(); 
    loadModels();
    loadVehicles();
    loadOrders();
  }

   const deleteModel = async (id) => {
    await axios.delete(apiGetModelByIdEndPoint+`/${id}`);   
    loadModels();
    loadVehicles();
    loadOrders();
  }

   const deleteVehicle = async (id) => {
    await axios.delete(apiGetVehicleByIdEndPoint+`/${id}`);
    loadVehicles();  
    loadOrders();
  }

   const deleteOrder = async (id) => {
    await axios.delete(apiGetOrderByIdEndPoint+`/${id}`);
    loadOrders();
  }
  return (
    <div className="container">
      <div className="py-4">
        
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
                <Link to={`/view-brand/${brand.id}`}  className="btn btn-primary mx-2"> View brand</Link>

                  <Link to={`/edit-brand/${brand.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteBrand(brand.id)} className="btn btn-danger mx-2"> Delete</button>
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
                <Link to={`/view-model/${model.id}`}  className="btn btn-primary mx-2"> View Model</Link>

                  <Link to={`/edit-model/${model.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteModel(model.id)} className="btn btn-danger mx-2"> Delete</button>
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
                <Link to={`/view-vehicle/${vehicle.id}`}  className="btn btn-primary mx-2"> View Vehicle</Link>

                  <Link to={`/edit-vehicle/${vehicle.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteVehicle(vehicle.id)} className="btn btn-danger mx-2"> Delete</button>
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
                <Link to={`/view-order/${order.id}`}  className="btn btn-primary mx-2"> View Order</Link>

                  <Link to={`/edit-order/${order.id}`} className="btn btn-outline-primary mx-2">
                
                    Edit
                  </Link>
                  <button onClick={()=>deleteOrder(order.id)} className="btn btn-danger mx-2"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
}
