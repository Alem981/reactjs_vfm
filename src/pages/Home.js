import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const[users,setUsers] = useState([])
  useEffect(() => {
    loadUsers();
    loadDrivers();
  },[]);
  const loadUsers = async () =>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }
  const[drivers,setDrivers] = useState([])
  const loadDrivers = async () =>{
    const result = await axios.get("http://localhost:8080/drivers")
    setDrivers(result.data);
  }
  return (
    <div className="container">
      <div className="py-4">
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
            {
              users.map((user,index)=>(
              <tr key={user.id}>
                <th scope="row" key={index}>{index +1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
              ))
            }
                       
          </tbody>
        </table>
        <br /><br />

        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              drivers.map((driver,index)=>(
              <tr key={driver.id}>
                <th scope="row" key={index}>{index +1}</th>
                <td>{driver.firstName}</td>
                <td>{driver.lastName}</td>
                <td>{driver.email}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.age}</td>
                <td>{driver.salary}</td>
              </tr>
              ))
            }
                       
          </tbody>
        </table>


      </div>
    </div>
  );
}
