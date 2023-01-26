import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    loadUsers();
    loadDrivers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const [drivers, setDrivers] = useState([]);
  const loadDrivers = async () => {
    const result = await axios.get("http://localhost:8080/drivers");
    setDrivers(result.data);
  };
  const deleteDriver = async (id) => {
    await axios.delete(`http://localhost:8080/driver/${id}`);
    loadDrivers();
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
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
      </div>
    </div>
  );
}
