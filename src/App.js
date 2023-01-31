import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AddUser from './users/AddUser'
import Edituser from './users/EditUser';
import ViewUser from './users/ViewUser';



import AddDriver from './drivers/AddDriver';
import EditDriver from './drivers/EditDriver';
import ViewDriver from './drivers/ViewDriver';

import AddBrand from './brands/AddBrand';
import EditBrand from './brands/EditBrand';
import ViewBrand from './brands/ViewBrand';

import AddModel from './models/AddModel';
import EditModel from './models/EditModel';
import ViewModel from './models/ViewModel';

import AddVehicle from './vehicles/AddVehicle';
import EditVehicle  from './vehicles/EditVehicle';
import ViewVehicle  from './vehicles/ViewVehicle';

import AddOrder from './orders/AddOrder';
import EditOrder from './orders/EditOrder';
import ViewOrder from './orders/ViewOrder';




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/adduser" element={<AddUser />}></Route>
        <Route exact path="/edituser/:id" element={<Edituser />}></Route>
        <Route exact path="/view-user/:id" element={<ViewUser />}></Route>      

        <Route exact path="/add-driver" element={<AddDriver />}></Route>
        <Route exact path="/edit-driver/:id" element={<EditDriver />}></Route>      
        <Route exact path="/view-driver/:id" element={<ViewDriver />}></Route>

        <Route exact path="/add-brand" element={<AddBrand />}></Route>
        <Route exact path="/edit-brand/:id" element={<EditBrand />}></Route>      
        <Route exact path="/view-brand/:id" element={<ViewBrand />}></Route>   

        <Route exact path="/add-model" element={<AddModel />}></Route>
        <Route exact path="/edit-model/:id" element={<EditModel />}></Route>      
        <Route exact path="/view-model/:id" element={<ViewModel />}></Route> 

        <Route exact path="/add-vehicle" element={<AddVehicle />}></Route>
        <Route exact path="/edit-vehicle/:id" element={<EditVehicle />}></Route>      
        <Route exact path="/view-vehicle/:id" element={<ViewVehicle />}></Route> 

        <Route exact path="/add-order" element={<AddOrder />}></Route>
        <Route exact path="/edit-order/:id" element={<EditOrder />}></Route>      
        <Route exact path="/view-order/:id" element={<ViewOrder />}></Route> 
        

      </Routes>
      

      </Router>
    </div>
  );
}

export default App;
