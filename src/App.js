import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import AddUser from './users/AddUser'
import Edituser from './users/EditUser';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddDriver from './drivers/AddDriver';
import EditDriver from './drivers/EditDriver';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/adduser" element={<AddUser />}></Route>
        <Route exact path="/edituser/:id" element={<Edituser />}></Route>
        <Route exact path="/add-driver" element={<AddDriver />}></Route>
        <Route exact path="/edit-driver/:id" element={<EditDriver />}></Route>      
      </Routes>
      

      </Router>
    </div>
  );
}

export default App;
